# node-gtrans

A simple yet complete Google translate web extension API in readable format

## Features
* No API Token required
* Almost anything from google translate website

## Installing

Using npm:

```bash
$ npm i node-gtrans
```

using yarn:

```bash
$ yarn add node-gtrans
```

## Example usage

Basic usage:

```js
const gtrans = require("node-gtrans");

const words = "good morning";
// using promises:
gtrans(words, { to: "id" })
  .then((res) => console.log(res.data))
  .catch((e) => e);

// using async/await:
(async () => {
  const translated = await gtrans(words, { to: "id" }).then((res) => res.data);
  // const { data } = await gtrans(text, { to: 'id' }); // or this
  console.log(translated);
})();
```

Both will output this object:

```js
{
  translated: 'Selamat pagi',
  sourceText: 'good morning',
  from: 'English',
  to: 'Indonesian',
  isCorrected: false,
  pronunciation: 'ɡo͝od ˈmôrniNG',
  definitions: { exclamation: [ [Object] ] }
}
```

**note**: `res` is an axios response object in case if you want to use status text, header, etc.

## API

### **gtrans(text, [options])**

Available options are:

- `from` - The language id where the language comes from the. Leave it blank for auto detection
- `to` - The language id where the text will be translated to, this option is required.
- `interfaceLang` - The language id where the interface such as verbs, noun in object key will be translated. For example
  in Indonesian, verbs is translated to verba, noun to nomina, etc. Default to 'en' or English

  ```js
  // example output from:
  // await gtrans('run', { to: 'id', interfaceLang: 'id' }).then((res) => res.data);
  {
    translated: 'Lari',
    sourceText: 'run',
    translations: {
      verba: [ // from verb to verba
        [Object], [Object],
      ],
      nomina: [ // from noun to nomina
        [Object], [Object],
      ]
    },
    synonyms: {
      verba: [
        [Array], [Array], [Array],
      ],
      nomina: [
        [Array], [Array],
      ]
    },
    definitions: {
      verba: [
        [Object], [Object],
      ],
      nomina: [
        [Object], [Object],
      ]
    }
  }
  ```

- `htmlTag` - A boolean state whether the text that contain html tag will be converted to markdown format.
  html tag appears in examples and corrected. Default to `false`

  ```js
  // example output from:
  // await gtrans('ssprint', { to: 'id', htmlTag: true }).then((res) => res.data);
  {
    translated: 'lari cepat',
    sourceText: 'sprint',
    isCorrected: true,
    corrected: '<b><i>sprint</i></b>', // bold and italic tags, if false it'll be ***sprint***
    pronunciation: 'sprint',
    translations: { noun: [ [Object], [Object] ], verb: [ [Object] ] },
    synonyms: { verb: [ [Array], [Array], [Array] ] },
    definitions: { verb: [ [Object] ], noun: [ [Object], [Object] ] },
    examples: [
      'a <b>sprint</b> planning session', // bold tags in all instances of examples list
      'MacFarlane won the 1,500m with a fine <b>sprint</b> finish',
      'Greg broke into a <b>sprint</b>', // if false it'll be **sprint**
      'team members discuss issues with each other at the end of every <b>sprint</b>',
      'the 100 meters <b>sprint</b>'
    ]
  }
  ```

- `resolve` - A boolean state whether the language Id is converted to full language name, e.g. from 'en' to 'English'.
  Default to `true`.

  ```js
  // if true
  {
    translated: 'lari cepat',
    sourceText: 'sprint',
    from: 'English',
    to: 'Indonesian',
  }

  // else
  {
    translated: 'lari cepat',
    sourceText: 'sprint',
    from: 'en',
    to: 'id',
  }
  ```

See available language id [here](https://cloud.google.com/translate/docs/languages)

## Credits

https://www.labnol.org/code/19909-google-translate-api  
https://letconex.blogspot.com/2017/12/google-translate-query-parameters.html  
https://stackoverflow.com/questions/26714426/what-is-the-meaning-of-google-translate-query-params

## Contributing
Feel free to create an issue or pull request. I think my code isn't good enough
because this is my first work in typescript and as an exercise to learn typescript as well.

