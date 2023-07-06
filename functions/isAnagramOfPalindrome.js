export default function isAnagramOfPalindrome(string) {
   let charCount = {};

   for (let i = 0; i < string.length; i++) {
      let char = string[i];
      charCount[char] = charCount[char] || 0;
      charCount[char]++;
   }

   let oddCount = 0;

   for (let key in charCount) {
      if (charCount.hasOwnProperty(key)) {
         if (charCount[key] % 2 !== 0) {
            oddCount++;
         }
      }
   }

   return oddCount <= 1;
}
