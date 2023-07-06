function isLetter(character) {
   return (
      (character >= 'a' && character <= 'z') ||
      (character >= 'A' && character <= 'Z')
   );
}

function isSentenceEnd(character) {
   return character === '.' || character === '!' || character === '?';
}

export default function capitalizeFirstLetter(string) {
   let newString = '';
   let nextLetterUppercase = true;

   for (let i = 0; i < string.length; i++) {
      let character = string[i];

      if (nextLetterUppercase && isLetter(character)) {
         newString += character.toUpperCase();
         nextLetterUppercase = false;
      } else {
         newString += character;
      }

      if (isSentenceEnd(character)) {
         nextLetterUppercase = true;
      }
   }

   return newString;
}
