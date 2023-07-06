import reversePhrase from '../functions/reversePhrase';

test('Inverte a frase corretamente', () => {
   const result = reversePhrase('Hello, World! OpenAI is amazing.');
   const expected = 'amazing. is OpenAI World! Hello,';

   expect(result).toBe(expected);
});
