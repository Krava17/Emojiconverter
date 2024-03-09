# Emoji Converter

A simple JavaScript package that converts text-based emoticons into corresponding emoji characters.

## Installation

\`\`\`bash
npm install --save emoji-converter
\`\`\`

## Usage

\`\`\`javascript
const convertToEmoji = require('emoji-converter');

const textWithEmoticons = 'I am feeling :D today!';
const convertedText = convertToEmoji(textWithEmoticons);
console.log(convertedText); // Output: I am feeling 😄 today!
\`\`\`

## Emoji Mapping

The package currently supports the following emoticon to emoji mappings:

- `:)` => 😊
- `:(` => 😢
- `;)` => 😉
- `:D` => 😄
- `:P` => 😋
- `:O` => 😮
- `:|` => 😐
- `<3` => ❤️
- `:*` => 😘
- `:/` => 😕
- `>:(` => 😠
- `:0` => 😲
- `:3` => 😊
- `:heart:` => ❤️
- `:coffee:` => ☕️
- `:smile:` => 😊
- `:laughing:` => 😂
- `:wink:` => 😉
- `:yum:` => 😋
- `:heart_eyes:` => 😍
- `:sunglasses:` => 😎
- `:poop:` => 💩

## License

This package is licensed under the MIT License.
