import React from "react";
import Square from "../../atoms/Square";
import { RowElement } from "../../organisms/Board/subcomponents";
import { RowProps } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const chessBoard = useSelector(
    ({ boardState: { board } }: RootState) => board
  );

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
