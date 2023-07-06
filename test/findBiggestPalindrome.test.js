import findBiggestPalindrome from '../functions/findBiggestPalindrome';

test('Retorna o maior palindromo da string babad', () => {
   const result = findBiggestPalindrome('babad');
   const expected = 'bab';

   expect(result).toBe(expected);
});
