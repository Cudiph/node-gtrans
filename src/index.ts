import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { stringify } from "query-string";
import langId from "./resolver";

type TransOptions = {
  from?: string;
  to: string;
  interfaceLang?: string;
  htmlTag?: boolean;
  resolve?: boolean;
  axiosConfig?: AxiosRequestConfig,
  contents?: Array<'t' | 'at' | 'bd' | 'ex' | 'ld' | 'md' | 'qca' | 'rw' | 'rm' | 'ss'>,
};

type PartOfSpeechDefinition = {
  [key: string]: [{
    definition: string;
    example: string;
    synonyms: string[];
  }];
};

type PartOfSpeechTranslation = {
  [key: string]: [{
    word: string;
    translations: string[];
    frequency: string;
  }];
};

interface ReadableFormat {
  translated?: string;
  sourceText?: string;
  from: string;
  to: string;
  isCorrected?: boolean;
  corrected?: string;
  pronunciation?: string;
  definitions?: PartOfSpeechDefinition;
  translations?: PartOfSpeechTranslation;
  synonyms?: {
    [key: string]: string[][];
  };
  examples?: string[];
  related?: string[];
}

interface CustomAxiosResponse extends AxiosResponse {
  data: ReadableFormat;
}

async function translate(text: string, options: TransOptions): Promise<CustomAxiosResponse> {
  const {
    from = 'auto',
    to,
    interfaceLang = 'en',
    htmlTag = false,
    resolve = true,
    axiosConfig,
    contents = ['t', 'at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss'],
  } = options;

  const property = stringify({
    client: 'gtx',
    sl: from,
    tl: to,
    hl: interfaceLang,
    dt: contents,
    ie: 'UTF-8',
    oe: 'UTF-8',
    otf: 1,
    ssel: 0,
    tsel: 0,
    kc: 7,
    q: text,
  });

  const url = `https://translate.googleapis.com/translate_a/single?${property}`;

  const result = await axios.get(url, axiosConfig);

  const { data } = result;

  // create return object
  let readable: ReadableFormat = {
    from: data[8] && data[8][3] || data[8][0] ? data[8][3][0] || data[8][0][0] || 'auto' : 'auto',
    to: to,
  };

  // push translated and sourceText
  if (data[0]) {
    readable.translated = '';
    readable.sourceText = '';
    for (const iter of data[0]) {
      if (iter[0]) readable.translated += iter[0];
      if (iter[1]) readable.sourceText += iter[1];
      if (data[0][1] && data[0][1][3])
        readable.pronunciation = data[0][1][3] || '';
    }
  }

  // change lang id to full lang name
  if (resolve) {
    if (readable.from in langId) readable.from = langId[readable.from];
    if (readable.to in langId) readable.to = langId[readable.to];
    else readable.to = langId['en'];
    // if user give lang id incorrectly, google will always translate to english

  } else if (!(readable.to in langId)) {
    readable.to = 'en';
  }

  // auto correct feature
  if (data[7] && data[7].length) {
    readable.isCorrected = true;
    readable.corrected = data[7][0] || data[7][1];
    if (!htmlTag) {
      // replace html tag with markdown format
      readable.corrected = readable.corrected?.replace(/(?:<b>|<\/b>)/g, '**').replace(/(?:<i>|<\/i>)/g, '*');
    }
  } else {
    readable.isCorrected = false;
  }

  const speechList = data[1];
  if (speechList) {
    for (let i = 0; i < speechList.length; i++) {
      speechList[i][2].forEach((elem: any[]) => {
        // A hypothesis according to a number in the json file not 100% accurate maybe 80% :)
        let freq: string;
        if (elem[3] > 0.05) {
          freq = 'common';
        } else if (elem[3] >= 0.0025) {
          freq = 'uncommon';
        } else {
          freq = 'rare';
        }

        // push to the readable object where synonymsList[i][0] is oneof :
        // "adjective" | "noun" | "verb"
        if (!readable.translations) readable.translations = {};

        if (!readable.translations[speechList[i][0]])
          readable.translations[speechList[i][0]] = [] as any;

        readable.translations[speechList[i][0]].push({
          word: elem[0],
          translations: elem[1],
          frequency: freq
        });

      });
    }
  }

  const synonyms = data[11];
  if (synonyms) {
    if (!readable.synonyms) readable.synonyms = {};

    synonyms.forEach((elem: any[]) => {
      const speechName = elem[0]; // "noun" etc.

      if (!readable.synonyms![speechName]) readable.synonyms![speechName] = [] as any;
      elem[1].forEach((el: any[]) => {
        readable.synonyms![speechName].push(el[0]);
      });
    });

  }


  // definitions & the examples
  if (data[12]) {
    if (!readable.definitions) readable.definitions = {};
    data[12].forEach((elem: any[]) => {
      let speechName = elem[0]; // "noun" etc.

      // in case if google give an empty string just add to others property
      if (!speechName) speechName = 'others';

      // create an empty list if doesn't exist
      if (!readable.definitions![speechName]) readable.definitions![speechName] = [] as any;

      // elem[1] is list of all synonyms which divided by metaId
      // let's just say "m_en_gbus0888500.013" is metaId
      elem[1].forEach((defList: string[]) => {
        const metaId = defList[1]; // "m_en_gbus0888500.013"
        let synonymsList: string[] = [];

        if (synonyms) synonyms.forEach((e: any[]) => {
          // e[0] is "verb" etc.
          if (speechName === e[0]) {
            let matching = 0;
            // e[1] is list of synonyms at iter[0] and metaId at iter[1]
            for (const iter of e[1]) {

              if (metaId === iter[1]) {
                synonymsList.push(...iter[0]);
                matching++;
              } else if (matching > 0) {
                // for efficiency when the metaId were the same and nothing more it'll break the loop
                break;
              }
            }

          }
        });

        readable.definitions![speechName].push({
          definition: defList[0],
          example: defList[2] || '',
          synonyms: synonymsList,
        });
      });
    });

  }

  // example sentences
  if (data[13]) readable.examples = data[13][0].map((elem: any) => {
    if (htmlTag) return elem[0];
    // replace html tag to markdown
    return elem[0].replace(/(?:<b>|<\/b>)/g, '**');
  });


  if (data[14] && data[14][0])
    readable.related = data[14][0][0];
  // appear when you translate v2/v3 word e.g. drunk

  result.data = readable;
  return result;
}

export = translate;

translate.validateLangId = (langCode: string): string | boolean => {
  if (typeof langCode !== 'string') return false;
  if (langCode in langId) return langId[langCode]; else return false;
};

translate.getFixedT = (langCode: string) => {
  if (!translate.validateLangId(langCode)) throw new Error("Invalid language code");

  async function fixed(text: string) {
    try {
      const translated = await translate(text, { to: langCode, contents: ['t'] })
        .then(res => res.data.translated);
      return translated;
    } catch (e) {
      return text;
    }
  }

  return fixed;
};
