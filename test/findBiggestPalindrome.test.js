import findBiggestPalindrome from '../functions/findBiggestPalindrome';

test('', () => {
   const result = findBiggestPalindrome('babad');
   const expected = 'bab';

   expect(result).toBe(expected);
});
