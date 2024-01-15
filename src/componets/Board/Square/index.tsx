import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { useContext } from "react";
import { BoardContext } from "../BoardContext";
import { determineIsDark } from "./helpers";
// import { PieceColors } from "../../Piece/types";
// import Piece from "../../Piece";
import { AppContext } from "../../../AppContext";
import { updateGameState } from "../../../AppContext/gameState";
import Piece from "../../Piece";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  const { chessBoard, setSelectedSquare } = useContext(BoardContext);

  const { gameState, setGameState } = useContext(AppContext);

  const isDark = determineIsDark(columnIndex, rowIndex);

  // const piece = chessBoard[rowIndex][columnIndex];

  // This onClickHandler will have to overhauled... there's too much going on... maybe create a custom hook
  const onClickHandler = () => {
    console.log("click");
    // Clone the current chess board
    // const newBoard = chessBoard.map((row) => [...row]);

    // If no piece is currently selected and the clicked square has a piece, select the piece
    // if (!selectedSquare && piece?.color === gameState.currentPlayer) {
    setSelectedSquare({ columnIndex, rowIndex });
    // }

    // if there is a selected piece but the user selects another piece of the same color: the newly selected piece replaces the other selected piece
    // if (selectedPiece && piece?.color === selectedPiece.color) {
    //   setSelectedSquare({
    //     ...piece,
    //     position: { row: rowIndex, col: columnIndex },
    //   });
    // }

    // If a piece is selected and the clicked square is a valid destination, move the piece
    // if (
    //   selectedPiece &&
    //   isValidDestination({
    //     selectedPiece,
    //     rowIndex,
    //     columnIndex,
    //     chessBoard,
    //   })
    // ) {
    //   const {
    //     position: { row: selectedPieceRow, col: selectedPieceCol },
    //   } = selectedPiece;
    // Move the selected piece to the new location
    // newBoard[rowIndex][columnIndex] = selectedPiece;

    // Remove the selected piece from its original location
    // newBoard[selectedPieceRow][selectedPieceCol] = null;

    // Update the board state
    // setChessBoard(newBoard);

    // Deselect the piece after moving
    // setSelectedSquare(null);

    setGameState(updateGameState(chessBoard, gameState));
    // }
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      {/* {piece ? (
        <Piece
          color={
            piece.color === PieceColors.White
              ? PieceColors.White
              : PieceColors.Black
          }
          label={piece.label}
          position={{ row: rowIndex, col: columnIndex }}
        />
      ) : null} */}
      <Piece position={{ row: rowIndex, col: columnIndex }} />
    </SquareElement>
  );
};

export default Square;
