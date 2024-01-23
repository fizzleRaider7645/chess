import { SquareElement } from "../../organisms/Board/subcomponents";
import { SquareProps } from "./types";
import { determineIsDark } from "./helpers";
import Piece from "../Piece";
import { useDispatch, useSelector } from "react-redux";
import { attemptMove } from "../../../features/board/middleWare";
import { AppDispatch, RootState } from "../../../store";
import { updateSelectedSquare } from "../../../features/board/boardSlice";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const { selectedSquare, selectedPiece, board } = useSelector(
    ({ boardState }: RootState) => ({
      selectedSquare: boardState.selectedSquare,
      selectedPiece: boardState.selectedPiece,
      board: boardState.board,
    })
  );

  const isDark = determineIsDark(columnIndex, rowIndex);

  const onClickHandler = () => {
    const currentPosition = { col: columnIndex, row: rowIndex };
    const pieceAtCurrentPosition = board[rowIndex][columnIndex];

    if (
      selectedSquare &&
      selectedPiece &&
      (selectedSquare.row !== rowIndex || selectedSquare.col !== columnIndex)
    ) {
      // A piece is already selected, and a different square is clicked, try to move
      dispatch(
        attemptMove({
          currentPosition: selectedSquare,
          nextPosition: currentPosition,
        })
      );
    } else if (pieceAtCurrentPosition) {
      // No piece is selected, and the clicked square has a piece, select this square and piece
      dispatch(updateSelectedSquare(currentPosition));
    }
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      <Piece position={{ row: rowIndex, col: columnIndex }} />
    </SquareElement>
  );
};

export default Square;
