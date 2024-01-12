import { RowElement, SquareElement } from "./subcomponents";
import { SquareProps } from "./types";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  /**
   * Determines the color of a square in a chessboard.
   *
   * Chessboards have alternating square colors. Each row starts with a different color
   * than the previous row, creating a checkered pattern. This line calculates whether
   * a square should be dark or light based on its row and column indices.
   *
   * - `row % 2`: Checks if the row number is odd or even.
   *    - If the row number is even (row % 2 is 0), then for a standard chessboard,
   *      the first square (i = 0) should be dark. Therefore, the square is dark if
   *      its column index `i` is even (i % 2 === 0).
   *    - If the row number is odd (row % 2 is not 0), then the first square should
   *      be light. Therefore, the square is dark if its column index `i` is odd
   *      (i % 2 !== 0).
   *
   * As a result, `isDark` is a boolean that's true if the square should be dark,
   * and false if it should be light, creating the alternating pattern.
   */
  const isDark = rowIndex % 2 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0;

  const piece = <>Hi</>; // add get piece function here

  const onClickHandler = () => {};

  return (
    <SquareElement
      key={`square-${rowIndex}-${columnIndex}`}
      $isDark={isDark}
      onClick={onClickHandler}
    >
      {piece ?? ""}
    </SquareElement>
  );
};

export const Row = (rowIndex: number): JSX.Element => {
  return (
    <RowElement key={`row-${rowIndex}`}>
      {Array.from({ length: 8 }, (_, columnIndex) =>
        Square({ columnIndex, rowIndex })
      )}
    </RowElement>
  );
};
