// actions/chessActions.js

import { Action, ThunkAction } from "@reduxjs/toolkit";
import { Position } from "../../componets/atoms/Piece/types";
// import { calculateMove } from "../../const/logic";
import { AppDispatch, AppThunk, RootState } from "../../store";
import {
  movePiece,
  //   handleSpecialMoveAction,
  //   showInvalidMoveError,
} from "./boardSlice";

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

export const attemptMove = (
  currentPosition: Position,
  nextPosition: Position
): AppThunk => {
  return async (dispatch, getState) => {
    dispatch(movePiece({ currentPosition, nextPosition }));
  };
};
