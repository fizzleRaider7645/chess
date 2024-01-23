import { Position } from "../../componets/atoms/Piece/types";
// import { calculateMove } from "../../const/logic";
import {
  movePiece,
  //   handleSpecialMoveAction,
  //   showInvalidMoveError,
} from "./boardSlice";
import { AppThunk } from "../../store";
import { PayloadType } from "./types";

// export const attemptMove =
//   (
//     currentPosition: Position,
//     nextPosition: Position
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// ) =>
// (dispatch: AppDispatch, getState: () => RootState) => {
//   const { board, selectedPiece } = getState().boardState;
// const moveResult = calculateMove(
//   currentPosition,
//   nextPosition,
//   board,
//   selectedPiece
// );

// if (!moveResult.valid) {
//   // Dispatch an action to show an error or handle the invalid move
//   dispatch(showInvalidMoveError());
//   return;
// }

// if (moveResult.specialMove) {
// Dispatch an action to handle the special move
//   //   dispatch(
//   //     handleSpecialMoveAction(
//   //       moveResult.specialMove,
//   //       currentPosition,
//   //       nextPosition
//   //     )
//   //   );
// } else {
// Dispatch the movePiece action for normal moves
// dispatch(movePiece({ currentPosition, nextPosition }));
// }
// };

export const attemptMove =
  ({ currentPosition, nextPosition }: PayloadType): AppThunk =>
  (dispatch, getState) => {
    const state = getState();
    // const { board, selectedPiece } = state.boardState; // Adjust based on your actual state structure

    // if (shouldMovePiece(selectedPiece, currentPosition, nextPosition, board)) {
    dispatch(movePiece({ currentPosition, nextPosition }));
    // } else {
    // }
  };

const shouldMovePiece = (
  selectedPiece: Piece,
  currentPosition: Position,
  nextPosition: Position,
  board: BoardState
): boolean => {
  // Return true if the piece should move, false otherwise
  return true; // Placeholder
};
