function isLastChar(i, string) {
   return i === string.length - 1;
}

export default function reversePhrase(string) {
   let tempString = '';
   const words = [];

   for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (char !== ' ') tempString += char;

      if (char === ' ' || isLastChar(i, string)) {
         words.push(tempString);
         tempString = '';
      }
   }

   const lastIndex = words.length - 1;
   let reversedPhrase = '';

   for (let i = lastIndex; i >= 0; i--) {
      const word = words[i];
      reversedPhrase += word + ' ';
   }

   return reversedPhrase;
}
