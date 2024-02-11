import { PieceLabels } from "../../componets/atoms/Piece/types";
import { IsValidMoveProps } from "./types";
import pawnLogic from "./pawn";

const getPieceLogic = (pieceLabel: PieceLabels) => {
  const logicMap = {
    [PieceLabels.Pawn]: pawnLogic,
    [PieceLabels.Bishop]: {},
    [PieceLabels.Rook]: {},
    [PieceLabels.Knight]: {},
    [PieceLabels.Queen]: {},
    [PieceLabels.King]: {},
  };

  return logicMap[pieceLabel];
};

export const isValidMove = ({
  selectedPiece,
  currentPosition,
  nextPosition,
  board,
}: IsValidMoveProps) => {
  const pieceLogic = getPieceLogic(selectedPiece.label);
};
