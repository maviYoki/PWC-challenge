import findBiggestPalindrome from '../functions/findBiggestPalindrome';

test('Retorna uma string bab caso o input seja babad', () => {
   const result = findBiggestPalindrome('babad');
   const expected = 'bab';

   expect(result).toBe(expected);
});

test('Retorna uma string vazia caso o input seja cedf', () => {
   const result = findBiggestPalindrome('cedf');
   const expected = '';

   expect(result).toBe(expected);
});
