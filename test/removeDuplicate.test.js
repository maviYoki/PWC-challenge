import removeDuplicate from '../functions/removeDuplicate';

test('Remove as letras duplicadas de uma palavra', () => {
   const result = removeDuplicate('Hello, World!');
   const expected = 'Helo, Wrd!';

   expect(result).toBe(expected);
});
