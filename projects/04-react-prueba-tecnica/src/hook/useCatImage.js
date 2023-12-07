import { useEffect, useState } from "react";

export const useCatImage = (fact) => {
  const [firstWord, setFirstWord] = useState();
  // Para recuperar la imagen cada vez que cambie el hecho
  useEffect(() => {
    if (fact) {
      // Para extraer la primera palabra del hecho
      const words = fact.split(" ");
      const first = words.length > 0 ? words[0] : "";
      setFirstWord(first);
    }
  }, [fact]);

  return {
    firstWord,
  };
};
