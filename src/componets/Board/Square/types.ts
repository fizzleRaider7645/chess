import { Piece } from "../../Piece/types";

export interface SquareProps {
  rowIndex: number;
  columnIndex: number;
  piece: Piece | null;
}
