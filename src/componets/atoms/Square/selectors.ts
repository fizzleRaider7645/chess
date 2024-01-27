import { createSelector } from "reselect";
import { RootState } from "../../../store";

const getSelectedSquare = (state: RootState) => state.boardState.selectedSquare;
const getSelectedPiece = (state: RootState) => state.boardState.selectedPiece;
const getBoard = (state: RootState) => state.boardState.board;
const getTurn = (state: RootState) => state.boardState.turn;

export const boardStateSelector = createSelector(
  [getSelectedSquare, getSelectedPiece, getBoard, getTurn],
  (selectedSquare, selectedPiece, board, turn) => ({
    selectedSquare,
    selectedPiece,
    board,
    turn,
  })
);
