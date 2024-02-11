import { Piece, Position } from "../../components/atoms/Piece/types";
import { Board } from "../../components/organisms/Board/types";

export interface IsValidMoveProps {
  selectedPiece: Piece;
  currentPosition: Position;
  nextPosition: Position;
  board: Board;
}
