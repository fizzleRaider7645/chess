import {
  Piece,
  PieceLabels,
  Position,
} from "../../components/atoms/Piece/types";
import { IsValidMoveProps } from "./types";
import pawnLogic from "./maps/pawn";
import { Board } from "../../components/organisms/Board/types";

const logicMap = {
  [PieceLabels.Pawn]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) =>
    pawnLogic({
      piece,
      nextPosition,
      currentPosition,
      board,
    }),
  [PieceLabels.Bishop]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) => false,
  [PieceLabels.Rook]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) => false,
  [PieceLabels.Knight]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) => false,
  [PieceLabels.Queen]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) => false,
  [PieceLabels.King]: (
    piece: Piece,
    nextPosition: Position,
    currentPosition: Position,
    board: Board
  ) => false,
};

export const isValidMove = ({
  selectedPiece,
  currentPosition,
  nextPosition,
  board,
}: IsValidMoveProps): boolean => {
  return logicMap[selectedPiece.label](
    selectedPiece,
    nextPosition,
    currentPosition,
    board
  );
};
