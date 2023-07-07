import capitalizeFirstLetter from '../functions/capitalizeFirstLetter';

test("Retorna 'Hello. How are you? I'm fine, thank you.' caso o input seja 'hello. how are you? i'm fine, thank you.'", () => {
   const result = capitalizeFirstLetter(
      "hello. how are you? i'm fine, thank you."
   );
   const expected = "Hello. How are you? I'm fine, thank you.";

   expect(result).toBe(expected);
});
