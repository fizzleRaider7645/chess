import React from "react";
import Square from "../Square";
import { RowElement } from "../subcomponents";
import { RowProps } from "./types";

const Row: React.FC<RowProps> = ({ rowIndex, rowData, updateBoard }) => {
  return (
    <RowElement key={`row-${rowIndex}`}>
      {rowData.map((piece, columnIndex) => (
        <Square
          key={`square-${rowIndex}-${columnIndex}`}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          piece={piece}
          updateBoard={updateBoard}
        />
      ))}
    </RowElement>
  );
};

export default Row;
