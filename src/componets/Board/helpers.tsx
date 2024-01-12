import { Row, Square } from "./subcomponents";
import { SquareProps } from "./types";

const renderSquare = ({ i, row, piece }: SquareProps): JSX.Element => {
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
  const isDark = row % 2 ? i % 2 === 0 : i % 2 !== 0;

  const onClickHandler = () => {};

  return (
    <Square
      key={`square-${row}-${i}`}
      $isDark={isDark}
      onClick={onClickHandler}
    ></Square>
  );
};

export const renderRow = (row: number): JSX.Element => {
  const size = 8; // Assuming size is the number of squares per row

  return (
    <Row key={`row-${row}`}>
      {Array.from({ length: size }, (_, i) => renderSquare({ i, row }))}
    </Row>
  );
};
