export default function findBiggestPalindrome(string) {
   let biggestPalindrome = '';
   let lastBiggestPalindromeSize = 0;

   for (let i = 0; i < string.length; i++) {
      for (let j = string.length; j > i; j--) {
         let word = '';

         // Palavra ao contrario
         for (let k = j - 1; k >= i; k--) {
            word += string[k];
         }

         let isPalindrome = true;

         for (let m = 0; m < word.length; m++) {
            if (word[m] !== string[i + m]) {
               isPalindrome = false;
               break;
            }
         }

         if (isPalindrome && word.length > lastBiggestPalindromeSize) {
            biggestPalindrome = word;
            lastBiggestPalindromeSize = word.length;
            break;
         }
      }
   }
   if (biggestPalindrome.length === 1) {
      biggestPalindrome = '';
   }

   return biggestPalindrome;
}
