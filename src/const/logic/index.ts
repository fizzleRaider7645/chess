import {
  Piece,
  PieceLabels,
  Position,
} from "../../components/atoms/Piece/types";
import { IsValidMoveProps } from "./types";
import pawnLogic from "./maps/pawn";
import { Board } from "../../components/organisms/Board/types";

const getPieceLogic = (
  selectedPiece: Piece,
  nextPosition: Position,
  currentPosition: Position,
  board: Board
) => {
  const pieceLabel = selectedPiece.label;

  const logicMap = {
    [PieceLabels.Pawn]: () =>
      pawnLogic({
        piece: selectedPiece,
        nextPosition,
        currentPosition,
        board,
      }),
    [PieceLabels.Bishop]: () => false,
    [PieceLabels.Rook]: () => false,
    [PieceLabels.Knight]: () => false,
    [PieceLabels.Queen]: () => false,
    [PieceLabels.King]: () => false,
  };

  return logicMap[pieceLabel];
};

export const isValidMove = ({
  selectedPiece,
  currentPosition,
  nextPosition,
  board,
}: IsValidMoveProps): boolean => {
  const pieceLogic = getPieceLogic(
    selectedPiece,
    nextPosition,
    currentPosition,
    board
  );
  return pieceLogic();
};
