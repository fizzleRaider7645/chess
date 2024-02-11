import { movePiece, revert } from "./boardSlice";
import { AppThunk } from "../../store";
import { PayloadType } from "./types";

export const attemptMove =
  ({ currentPosition, nextPosition }: PayloadType): AppThunk =>
  (dispatch) => {
    // add isValid here / will also need to add something for special moves
    dispatch(movePiece({ currentPosition, nextPosition }));
  };

export const attemptRevert = (): AppThunk => (dispatch, getState) => {
  const {
    boardState: { gameFrames },
  } = getState();
  if (gameFrames.length > 1) {
    dispatch(revert());
  }
};
