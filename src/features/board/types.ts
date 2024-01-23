import { Piece, Position } from "../../componets/atoms/Piece/types";
import { Board } from "../../componets/organisms/Board/types";

export interface BoardState {
  board: Board;
  selectedSquare: Position | null;
  selectedPiece: Piece | null;
}
export interface MoveActionType {
  currentPosition: Position;
  nextPosition: Position;
}

export type PayloadType = { currentPosition: Position; nextPosition: Position };
