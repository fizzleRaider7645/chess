import { Piece, Position } from "../../componets/atoms/Piece/types";
import { Board } from "../../componets/organisms/Board/types";

export interface IsValidMoveProps {
  selectedPiece: Piece;
  currentPosition: Position;
  nextPosition: Position;
  board: Board;
}
