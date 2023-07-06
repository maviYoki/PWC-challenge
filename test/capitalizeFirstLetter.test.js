import capitalizeFirstLetter from '../functions/capitalizeFirstLetter';

test('Coloca a primeira letra de cada frase em maiusculo', () => {
   const result = capitalizeFirstLetter(
      "hello. how are you? i'm fine, thank you."
   );
   const expected = "Hello. How are you? I'm fine, thank you.";

   expect(result).toBe(expected);
});
