// emoji-converter.js

const emojiMap = {
    ':)': '😊',
    ':(': '😢',
    ';)': '😉',
    ':D': '😄',
    ':P': '😋',
    ':O': '😮',
    ':|': '😐',
    '<3': '❤️',
    ':*': '😘',
    ':/': '😕',
    ':)': '😊',
    '>:(': '😠',
    ':0': '😲',
    ':3': '😊',
    ':heart:': '❤️',
    ':coffee:': '☕️',
    ':smile:': '😊',
    ':laughing:': '😂',
    ':wink:': '😉',
    ':yum:': '😋',
    ':heart_eyes:': '😍',
    ':sunglasses:': '😎',
    ':poop:': '💩'
  };
  
  function convertToEmoji(text) {
    let convertedText = text;
    Object.keys(emojiMap).forEach(key => {
      const regex = new RegExp(key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
      convertedText = convertedText.replace(regex, emojiMap[key]);
    });
    return convertedText;
  }
  
  module.exports = convertToEmoji;
  