import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { useContext } from "react";
import { Context } from "../Context";
import { determineIsDark, isValidDestination } from "./helpers";
import { PieceColors } from "../../Piece/types";
import Piece from "../../Piece";

const Square = ({ columnIndex, rowIndex, piece }: SquareProps): JSX.Element => {
  const { chessBoard, setChessBoard, selectedPiece, setSelectedPiece } =
    useContext(Context);

  const isDark = determineIsDark(columnIndex, rowIndex);

  const onClickHandler = () => {
    // Clone the current chess board
    const newBoard = chessBoard.map((row) => [...row]);

    // If no piece is currently selected and the clicked square has a piece, select the piece
    if (!selectedPiece && piece) {
      setSelectedPiece({
        ...piece,
        position: { row: rowIndex, col: columnIndex },
      });
    }

    // if there is a selected piece but the user selects another piece of the same color: the newly selected piece replaces the other selected piece
    if (selectedPiece && piece?.color === selectedPiece.color) {
      setSelectedPiece({
        ...piece,
        position: { row: rowIndex, col: columnIndex },
      });
    }

    // If a piece is selected and the clicked square is a valid destination, move the piece
    if (
      selectedPiece &&
      isValidDestination({
        selectedPiece,
        rowIndex,
        columnIndex,
        chessBoard,
      })
    ) {
      const {
        position: { row, col },
      } = selectedPiece;
      // Move the piece to the new location
      newBoard[rowIndex][columnIndex] = selectedPiece;

      // Remove the piece from its original location
      newBoard[row][col] = null;

      // Update the board state
      setChessBoard(newBoard);

      // Deselect the piece after moving
      setSelectedPiece(null);
    }
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      {piece ? (
        <Piece
          color={
            piece.color === PieceColors.White
              ? PieceColors.White
              : PieceColors.Black
          }
          label={piece.label}
          position={{ row: rowIndex, col: columnIndex }}
        />
      ) : null}
    </SquareElement>
  );
};

export default Square;
