import React, { useContext } from "react";
import Square from "../Square";
import { RowElement } from "../subcomponents";
import { RowProps } from "./types";
import { Context } from "../Context";

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const { chessBoard } = useContext(Context);
  const rowData = chessBoard[rowIndex];

  return (
    <RowElement key={`row-${rowIndex}`}>
      {rowData.map((piece, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          piece={piece}
        />
      ))}
    </RowElement>
  );
};

export default Row;
