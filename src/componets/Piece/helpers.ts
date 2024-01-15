import { DetermineIsSelectedProps } from "./types";

export const determineIsSelected = ({
  selectedPiece,
  rowIndex,
  columnIndex,
}: DetermineIsSelectedProps): boolean => {
  return !!(
    selectedPiece?.position?.row === rowIndex &&
    selectedPiece?.position?.col === columnIndex
  );
};
