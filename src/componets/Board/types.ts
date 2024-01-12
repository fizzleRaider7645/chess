import Piece from "../Piece";

export interface SquareProps {
  columnIndex: number;
  rowIndex: number;
}

export type Board = (Piece | null)[][];
