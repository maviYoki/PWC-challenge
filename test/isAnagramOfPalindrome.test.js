import isAnagramOfPalindrome from '../functions/isAnagramOfPalindrome';

test('Retorna true caso o input seja racecar', () => {
   const result = isAnagramOfPalindrome('racecar');
   const expected = true;

   expect(result).toBe(expected);
});

test('Retorna false caso input seja abcd', () => {
   const result = isAnagramOfPalindrome('abcd');
   const expected = false;

   expect(result).toBe(expected);
});
