import { Piece } from "../../Piece/types";

export interface SquareProps {
  rowIndex: number;
  columnIndex: number;
  piece: Piece | null;
}

export interface PieceToRenderProps {
  piece: Piece | null;
  rowIndex: number;
  columnIndex: number;
}
