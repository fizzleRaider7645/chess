import React from "react";
import Square from "../../atoms/Square";
import { RowElement } from "../../organisms/Board/subcomponents";
import { RowProps } from "./types";

const Row: React.FC<RowProps> = ({ rowIndex, chessBoard }) => {
  const rowState = chessBoard[rowIndex];

  return (
    <RowElement key={`row-${rowIndex}`}>
      {rowState.map((_, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </RowElement>
  );
};

export default Row;
