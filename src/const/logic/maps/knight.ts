import { Piece, Position } from "../../../components/atoms/Piece/types";
import { Board } from "../../../components/organisms/Board/types";

interface KnightLogicProps {
  piece: Piece;
  nextPosition: Position;
  currentPosition: Position;
  board: Board;
}

const knight = ({
  piece,
  nextPosition,
  currentPosition,
  board,
}: KnightLogicProps) => {
  // Calculate the absolute differences in row and column
  const rowDiff = Math.abs(nextPosition.row - currentPosition.row);
  const colDiff = Math.abs(nextPosition.col - currentPosition.col);

  // Knight moves in L-shape: 2 squares in one direction and 1 square perpendicular
  const isValidKnightMove =
    (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);

  // Check if target square is empty or contains an enemy piece
  const isTargetSquareValid =
    !board[nextPosition.row][nextPosition.col] ||
    board[nextPosition.row][nextPosition.col]?.color !== piece.color;

  return isValidKnightMove && isTargetSquareValid;
};

export default knight;
