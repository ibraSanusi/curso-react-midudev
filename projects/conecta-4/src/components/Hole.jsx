export const Hole = ({ value, index, updateBoard }) => {
  // Funcion que se ejecuta al hacer  click en el egujero
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      className="hole"
      onClick={handleClick}
      style={{ backgroundColor: value }}
    />
  );
};
