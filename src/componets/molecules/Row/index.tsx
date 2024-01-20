import React, { useContext } from "react";
import Square from "../../atoms/Square";
import { RowElement } from "../../organisms/Board/subcomponents";
import { RowProps } from "./types";
import { BoardContext } from "../../../contexts/BoardContext";

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
        />
      ))}
    </RowElement>
  );
};

export default Row;
