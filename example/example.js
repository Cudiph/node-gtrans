const gtrans = require('../dist/index.js');

async function trans(text, options = {}) {
  if (typeof options !== 'object') throw new TypeError('INVALID_TYPE');

  let translated;
  try {
    translated = await gtrans(text, options).then(res => res.data);
  } catch (e) {
    return console.error(e);
  }

  console.log(`Word(s) "${text}" has meaning "${translated.translated}"`);

  if (translated.pronunciation) console.log(`${translated.sourceText} is pronounced "${translated.pronunciation}"`);

  if (translated.isCorrected) console.log(`did you mean "${translated.corrected.replace(/\*/g, '')}"?`);

  // translations
  if (translated.translations) {
    for (const key in translated.translations) {
      let longest = 0;
      console.log();
      // find longest string
      translated.translations[key].forEach(el => {
        if (el.word.length > longest) longest = el.word.length + 1;
      })

      // because it's left & right so divide by 2 and 31 is from 62 / 2 and - 1 is from spacebar from either side
      console.log(`${'='.repeat((longest / 2) + 31 - 1)} ${key} ${'='.repeat((longest / 2) + 31 - 1)}`);

      // 62 is just brute force of the longest line to make it neat lol
      console.log('-'.repeat(longest + 62 + key.length))
      console.log(`word ${' '.repeat(longest - 4)}| translations ${' '.repeat(50 - 12)}| frequency`);
      console.log('-'.repeat(longest + 62 + key.length))

      translated.translations[key].forEach(el => {
        const indent = longest - el.word.length;
        console.log(`${el.word + ' '.repeat(indent)} | ${el.translations.join(', ').length < 50 ? el.translations.join(', ').padEnd(50, ' ') : el.translations.join(', ').substr(0, 47).padEnd(50, '.')} | ${el.frequency}`);
      })

      console.log('-'.repeat(longest + 62 + key.length))

    }
  }

  // definitions
  if (translated.definitions) {
    for (const key in translated.definitions) {
      let longest = 0;
      console.log();

      // find longest string
      translated.definitions[key].forEach(el => {
        if (el.definition.length > longest) longest = el.definition.length + 1;
      })

      if (longest > 50) longest = 50;

      // because it's left & right so divide by 2 and 31 is from 100 / 2 and - 1 is from spacebar from either side
      console.log(`${'='.repeat((longest / 2) + 50 - 1)} ${key} ${'='.repeat((longest / 2) + 50 - 1)}`);

      // 100 is just brute force of the longest line to make it neat lol
      console.log('-'.repeat(longest + 100 + key.length))
      console.log(`definition ${' '.repeat(longest - 10)}| synonyms ${' '.repeat(50 - 8)}| example`);
      console.log('-'.repeat(longest + 100 + key.length))

      translated.definitions[key].forEach(el => {
        console.log(`${(el.definition.length < 50 ? el.definition.padEnd(50, ' ') : el.definition.substr(0, 47).padEnd(50, '.'))} | ${el.synonyms.join(', ').length < 50 ? el.synonyms.join(', ').padEnd(50, ' ') : el.synonyms.join(', ').substr(0, 47).padEnd(50, '.')} | ${el.example}`);
      })

      console.log('-'.repeat(longest + 100 + key.length) + '\n')

    }
  }

  if (translated.synonyms) {
    for (const key in translated.synonyms) {
      const highlightedSyn = translated.synonyms[key].map(el => {
        return el[0]
      })
      console.log(`Top Synonyms for ${key} are: ${highlightedSyn.join(', ')}\n`);
    }
  }

  if (translated.examples) console.log(`example: ${translated.examples[Math.floor(Math.random() * translated.examples.length)]}\n`);

  console.log(`translated from ${translated.from} to ${translated.to}`);

}

(async () => {

  await trans('run', { to: 'id' });

  const languageId = 'R4nD0m';
  if (gtrans.validateLangId(languageId)) {
    trans('walk', { to: languageId });
  } else {
    console.log(`"${languageId}" is not valid language code`);
  }

})()
