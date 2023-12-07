import { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hook/useCatImage";
import "./App.css";

function App() {
  const [fact, setFact] = useState();

  // Para recuperar la cita
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  // Sacamos las primera palabra del fact o hecho
  const { firstWord } = useCatImage(fact);

  const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`;

  // Para recuperar una nueva cita cada vez que se pulse el boton
  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <button onClick={handleClick}>Actualizar Gatitos</button>
      <h1>APP DE GATITOS</h1>
      <p>{fact && fact}</p>

      <img
        src={CAT_ENDPOINT_IMAGE_URL}
        alt={`Imagen de un gato que dice ${firstWord}`}
      />
    </main>
  );
}

export default App;
