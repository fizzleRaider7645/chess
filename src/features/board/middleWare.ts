import { movePiece, revert } from "./boardSlice";
import { AppThunk } from "../../store";
import { PayloadType } from "./types";
import { isValidMove } from "../../const/logic";

export const attemptMove =
  ({
    currentPosition,
    nextPosition,
    selectedPiece,
    board,
  }: PayloadType): AppThunk =>
  (dispatch) => {
    const moveIsValid = isValidMove({
      currentPosition,
      nextPosition,
      selectedPiece,
      board,
    });

    if (moveIsValid) {
      dispatch(movePiece({ currentPosition, nextPosition }));
    }
  };

export const attemptRevert = (): AppThunk => (dispatch, getState) => {
  const {
    boardState: { gameFrames },
  } = getState();
  if (gameFrames.length > 1) {
    dispatch(revert());
  }
};
