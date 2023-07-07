import removeDuplicate from '../functions/removeDuplicate';

test("Retorna `Helo, Wrd!' caso o input seja 'Hello, World!' ", () => {
   const result = removeDuplicate('Hello, World!');
   const expected = 'Helo, Wrd!';

   expect(result).toBe(expected);
});

test("Retorna `1054' caso o input seja '1100155555541' ", () => {
   const result = removeDuplicate('1100155555541');
   const expected = '1054';

   expect(result).toBe(expected);
});
