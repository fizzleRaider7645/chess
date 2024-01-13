import { IsValidDestinationProps } from "./types";

export const determineIsDark = (
  columnIndex: number,
  rowIndex: number
): boolean => {
  return rowIndex % 2 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0;
};

export const isValidDestination = ({
  selectedPiece,
  rowIndex,
  columnIndex,
  chessBoard,
}: IsValidDestinationProps): boolean => {
  if (
    rowIndex !== selectedPiece.position.row ||
    columnIndex !== selectedPiece.position.col
  ) {
    return true;
  }

  return false;
};
