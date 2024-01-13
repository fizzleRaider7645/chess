import { Piece } from "../../Piece/types";
import { Board } from "../types";

export interface SquareProps {
  rowIndex: number;
  columnIndex: number;
  piece: Piece | null;
}

export interface IsValidDestinationProps {
  selectedPiece: Piece;
  rowIndex: number;
  columnIndex: number;
  chessBoard: Board;
}
