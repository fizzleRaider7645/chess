import React, { useContext } from "react";
import Square from "../Square";
import { RowElement } from "../subcomponents";
import { RowProps } from "./types";
import { BoardContext } from "../BoardContext";

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const { chessBoard } = useContext(BoardContext);

  const rowData = chessBoard[rowIndex];

  return (
    <RowElement key={`row-${rowIndex}`}>
      {rowData.map((_, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          // piece={piece}
        />
      ))}
    </RowElement>
  );
};

export default Row;
