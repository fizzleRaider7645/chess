import { Piece } from "../../Piece/types";
import { Board } from "../types";

export interface SquareProps {
  rowIndex: number;
  columnIndex: number;
  piece: Piece | null;
  updateBoard: (newBoard: Board) => void;
}
