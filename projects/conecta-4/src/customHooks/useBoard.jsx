import { useState } from "react";
import { TURNS } from "../constants";

export const useBoard = () => {
  const [turn, setTurn] = useState(TURNS.firstPlayer);
  const [board, setBoard] = useState(Array(42).fill(null));
  const [winner, setWinner] = useState(null);

  const swtichTurn = (inputTurn) => {
    setTurn(inputTurn);
  };

  const changeBoard = (inputBoard) => {
    setBoard(inputBoard);
  };

  const chooseWinner = (inputWinner) => {
    setWinner(inputWinner);
  };

  return {
    turn,
    board,
    winner,
    swtichTurn,
    changeBoard,
    chooseWinner,
  };
};
