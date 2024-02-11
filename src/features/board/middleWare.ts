import { movePiece, revert } from "./boardSlice";
import { AppThunk } from "../../store";
import { PayloadType } from "./types";

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

export const attemptRevert = (): AppThunk => (dispatch, getState) => {
  const {
    boardState: { gameFrames },
  } = getState();
  if (gameFrames.length > 1) {
    dispatch(revert());
  }
};
