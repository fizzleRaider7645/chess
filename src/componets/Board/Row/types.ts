import { Piece } from "../../Piece/types";
import { Board } from "../types";

export interface RowProps {
  rowIndex: number;
  rowData: (Piece | null)[];
  updateBoard: (newBoard: Board) => void;
}
