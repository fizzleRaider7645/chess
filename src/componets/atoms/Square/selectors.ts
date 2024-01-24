import { createSelector } from "reselect";
import { RootState } from "../../../store";

const getSelectedSquare = (state: RootState) => state.boardState.selectedSquare;
const getSelectedPiece = (state: RootState) => state.boardState.selectedPiece;
const getBoard = (state: RootState) => state.boardState.board;

export const boardStateSelector = createSelector(
  [getSelectedSquare, getSelectedPiece, getBoard],
  (selectedSquare, selectedPiece, board) => ({
    selectedSquare,
    selectedPiece,
    board,
  })
);
