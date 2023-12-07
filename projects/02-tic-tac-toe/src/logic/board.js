import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // Revisamos si todos los elementos
  // del array son distintos de null
  return newBoard.every((square) => square !== null);
};
