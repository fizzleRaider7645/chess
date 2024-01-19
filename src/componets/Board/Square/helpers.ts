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
  const selectedSquareContainsPiece = chessBoard[rowIndex][columnIndex];

  /**
   * Valid if
   * space is empty
   * space has piece of opposite color than selectedPiece and move is valid per piece rules
   *
   *
   */

  if (selectedSquareContainsPiece?.color === selectedPiece.color) {
    return false;
  }

  return true;
};

export const handleSquareClicks = (
  setBoardState: React.Dispatch<React.SetStateAction<SquareProps | null>>
) => {};
