import { DetermineIsSelectedProps } from "./types";

export const generateUniqueId = () => {
  return Math.random().toString(36).substring(7);
};

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
