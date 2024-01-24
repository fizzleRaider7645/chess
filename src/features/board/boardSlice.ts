import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState, MoveActionType } from "./types";
import { Position } from "../../componets/atoms/Piece/types";

const initialState: BoardState = {
  board: initialBoardSetup(),
  selectedSquare: null,
  selectedPiece: null,
  frames: [],
};

const boardStateSlice = createSlice({
  name: "boardState",
  initialState,
  reducers: {
    // make reducers pure / only input
    movePiece: (state, { payload }: PayloadAction<MoveActionType>) => {
      const { currentPosition, nextPosition } = payload;
      // Move the selected piece to the next position
      state.board[nextPosition.row][nextPosition.col] = state.selectedPiece;

      // Clear the starting position
      state.board[currentPosition.row][currentPosition.col] = null;

      // Add last move to frames
      [...state.frames, state.board];

      // Optionally, reset selectedPiece and selectedSquare if you want to deselect after moving
      state.selectedPiece = null;
      state.selectedSquare = null;
    },
    revert: (state) => {
      const { frames } = state;
      const lastFrame = frames.pop();

      state.board = lastFrame;
    },
    updateSelectedSquare: (state, { payload }: PayloadAction<Position>) => {
      state.selectedSquare = payload;
      // Ensure that the selected piece is updated based on the new selected square
      state.selectedPiece = state.board[payload.row][payload.col] ?? null;
    },
  },
});

export const { movePiece, revert, updateSelectedSquare } =
  boardStateSlice.actions;

export default boardStateSlice.reducer;
