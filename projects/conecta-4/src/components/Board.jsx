import { Hole } from "./Hole";
import confetti from "canvas-confetti";
import { useBoard } from "../customHooks/useBoard";
import { TURNS, COLUMNS } from "../constants";
import { checkEndGame, checkWinnerCombo } from "../logic/logic";

export const Board = () => {
  const { swtichTurn, changeBoard, chooseWinner, turn, board, winner } =
    useBoard();

  // comprobamos si hay hueco mas abajo en la columna
  // para que la ficha caiga
  const checkColumn = (index) => {
    let columnIndex;
    COLUMNS.forEach((column) => {
      if (column.includes(index)) {
        for (let i = column.length - 1; i >= 0; i--) {
          if (board[column[i]] === null) {
            columnIndex = column[i];
            break; // Exit the loop once a valid index is found
          }
        }
      }
    });
    return columnIndex;
  };

  const updateBoard = (index) => {
    const newIndex = checkColumn(index);

    // Si no hay ganador y el espacio pulsado esta vacio
    // se actualiza la tabla
    if (board[index] === null && winner === null) {
      const newBoard = [...board];
      newBoard[newIndex] = turn;
      changeBoard(newBoard);

      // Comprobamos si el jugador ha ganado con esa tirada
      const newWinner = checkWinnerCombo(newBoard);
      //Ganador
      if (newWinner !== null) {
        confetti();
        chooseWinner(newWinner);
      } else {
        // Si no hay ganador se comprueba si hay empate
        if (!checkEndGame(newBoard)) {
          swtichTurn(
            turn === TURNS.firstPlayer ? TURNS.secondPlayer : TURNS.firstPlayer
          );
        } else {
          chooseWinner(false);
        }
      }
    }
  };

  const resetGame = () => {
    chooseWinner(null);
    changeBoard(Array(42).fill(null));
    swtichTurn(TURNS.firstPlayer);
  };

  // A renderizar
  return (
    <>
      <h1>Conecta 4</h1>

      {/* Tablero*/}
      <div className="board">
        {board.map((value, index) => {
          return (
            <Hole
              key={index}
              value={value}
              index={index}
              updateBoard={updateBoard}
            />
          );
        })}
      </div>

      {/* Seguimiento de turnos */}
      <div className="turns">
        <h1 className={turn === TURNS.firstPlayer ? "isSelected" : ""}>
          YELLOW
        </h1>
        <h1 className={turn === TURNS.secondPlayer ? "isSelected" : ""}>RED</h1>
      </div>

      {/* Modal por fin de partida */}
      {(winner || winner === false) && (
        <div className="winner">
          <div className="win">
            <h1>GANADOR</h1>
          </div>
          <div className="text">
            {winner ? (
              <>
                <h2>Gano:</h2>
                {<Hole value={turn} />}
              </>
            ) : (
              <h2>Empate</h2>
            )}
            <button onClick={resetGame}>Jugar de nuevo</button>
          </div>
        </div>
      )}
    </>
  );
};
