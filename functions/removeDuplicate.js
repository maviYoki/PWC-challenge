export default function removeDuplicate(string) {
   let noDuplicatesString = ''; // Helo, W

   for (let i = 0; i < string.length; i++) {
      const char = string[i];
      let isDuplicate = false;

      for (let j = 0; j < noDuplicatesString.length; j++) {
         const newStringChar = noDuplicatesString[j];

         if (char === newStringChar) {
            isDuplicate = true;
            break;
         }
      }

      if (!isDuplicate) {
         noDuplicatesString += char;
      }
   }

   return noDuplicatesString;
}
