import {
  Piece,
  PieceColors,
  Position,
} from "../../components/atoms/Piece/types";
import { Board } from "../../components/organisms/Board/types";

export interface BoardState {
  board: Board;
  selectedSquare: Position | null;
  selectedPiece: Piece | null;
  turn: PieceColors;
  gameFrames: Board[];
}

export interface MoveActionType {
  currentPosition: Position;
  nextPosition: Position;
}

export type PayloadType = {
  currentPosition: Position;
  nextPosition: Position;
  selectedPiece: Piece;
  board: Board;
};
