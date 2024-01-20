import { Position } from "../../componets/atoms/Piece/types";
import { Board } from "../../componets/organisms/Board/types";

export interface BoardState {
  board: Board;
  selectedSquare: Position | null;
}
