import { DetermineIsSelectedProps } from "./types";

export const determineIsSelected = ({
  selectedPiece,
  rowIndex,
  columnIndex,
}: DetermineIsSelectedProps): boolean => {
  return !!(
    selectedPiece &&
    selectedPiece.position.row === rowIndex &&
    selectedPiece.position.col === columnIndex
  );
};
