import { PieceLabels } from "../../components/atoms/Piece/types";
import { IsValidMoveProps, PieceLogicFunction } from "./types";
import pawnLogic from "./maps/pawn";
import knightLogic from "./maps/knight";

const logicMap: Record<PieceLabels, PieceLogicFunction> = {
  [PieceLabels.Pawn]: (piece, nextPosition, currentPosition, board) =>
    pawnLogic({ piece, nextPosition, currentPosition, board }) || false,
  [PieceLabels.Bishop]: () => false,
  [PieceLabels.Rook]: () => false,
  [PieceLabels.Knight]: (piece, nextPosition, currentPosition, board) =>
    knightLogic({ piece, nextPosition, currentPosition, board }) || false,
  [PieceLabels.Queen]: () => false,
  [PieceLabels.King]: () => false,
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
