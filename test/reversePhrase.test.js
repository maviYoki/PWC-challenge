import reversePhrase from '../functions/reversePhrase';

test("Retorna 'amazing. is OpenAI World! Hello,' caso o input seja 'Hello, World! OpenAI is amazing.' ", () => {
   const result = reversePhrase('Hello, World! OpenAI is amazing.');
   const expected = 'amazing. is OpenAI World! Hello,';

   expect(result).toBe(expected);
});
