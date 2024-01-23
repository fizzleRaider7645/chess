import { movePiece } from "./boardSlice";
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
    const {
      boardState: { selectedPiece },
    } = getState();
    // const { board, selectedPiece } = state.boardState;
    console.log(selectedPiece);

    // if (shouldMovePiece(selectedPiece, currentPosition, nextPosition, board)) {
    dispatch(movePiece({ currentPosition, nextPosition }));
    // } else {
    // }
  };
