import capitalizeFirstLetter from './functions/capitalizeFirstLetter.js';
import findBiggestPalindrome from './functions/findBiggestPalindrome.js';
import isAnagramOfPalindrome from './functions/isAnagramOfPalindrome.js';
import removeDuplicate from './functions/removeDuplicate.js';
import reversePhrase from './functions/reversePhrase.js';

console.log(
   `reversePhrase:  ${reversePhrase('Hello, World! OpenAI is amazing.')}`
);
console.log(`removeDuplicate: ${removeDuplicate('Hello, World!')}`);
console.log(`findBiggestPalindrome: ${findBiggestPalindrome('babad')}`);
console.log(
   `capitalizeFirstLetter: ${capitalizeFirstLetter(
      "hello. how are you? i'm fine, thank you."
   )}`
);
console.log(`isAnagramOfPalindrome: ${isAnagramOfPalindrome('racecar')}`);
