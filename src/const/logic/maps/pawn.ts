import {
  Piece,
  PieceColors,
  Position,
} from "../../../components/atoms/Piece/types";
import { Board } from "../../../components/organisms/Board/types";
interface PawnLogicProps {
  piece: Piece;
  nextPosition: Position;
  currentPosition: Position;
  board: Board;
}

const pawn = ({
  piece,
  nextPosition,
  currentPosition,
  board,
}: PawnLogicProps) => {
  const moveDirection = piece.color === PieceColors.White ? -1 : 1;
  const startingRow = piece.color === PieceColors.White ? 6 : 1;

  // Check if moving forward
  const isForwardMove =
    nextPosition.col === currentPosition.col &&
    nextPosition.row === currentPosition.row + moveDirection;

  // Check if moving forward two squares (only allowed on first move)
  const isDoubleForwardMove =
    piece.timesMoved === 0 &&
    currentPosition.row === startingRow &&
    nextPosition.col === currentPosition.col &&
    nextPosition.row === currentPosition.row + moveDirection * 2 &&
    !board[currentPosition.row + moveDirection][currentPosition.col];

  // Check diagonal captures
  const isDiagonalCapture =
    Math.abs(nextPosition.col - currentPosition.col) === 1 &&
    nextPosition.row === currentPosition.row + moveDirection &&
    board[nextPosition.row][nextPosition.col]?.color !== piece.color;

  // The target square must be empty for forward moves
  const isTargetSquareEmpty = !board[nextPosition.row][nextPosition.col];

  return (
    (isForwardMove && isTargetSquareEmpty) ||
    isDoubleForwardMove ||
    isDiagonalCapture
  );
};

export default pawn;
