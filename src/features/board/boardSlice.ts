import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState, MoveActionType } from "./types";
import { Position } from "../../componets/atoms/Piece/types";

const initialState: BoardState = {
  board: initialBoardSetup(),
  selectedSquare: null,
  selectedPiece: null,
  gameFrames: [],
};

const boardStateSlice = createSlice({
  name: "boardState",
  initialState,
  reducers: {
    movePiece: (state, { payload }: PayloadAction<MoveActionType>) => {
      const { currentPosition, nextPosition } = payload;
      state.board[nextPosition.row][nextPosition.col] = state.selectedPiece;

      state.board[currentPosition.row][currentPosition.col] = null;

      state.gameFrames = [...state.gameFrames, state.board];

      state.selectedPiece = null;
      state.selectedSquare = null;
    },
    revert: (state) => {
      if (state.gameFrames.length > 1) {
        const previousFrameIndex = state.gameFrames.length - 2;
        const previousBoard = state.gameFrames[previousFrameIndex];
        state.board = previousBoard;
        state.gameFrames.pop();
        state.selectedSquare = null;
        state.selectedPiece = null;
      }
    },
    updateSelectedSquare: (state, { payload }: PayloadAction<Position>) => {
      state.selectedSquare = payload;
      state.selectedPiece = state.board[payload.row][payload.col] ?? null;
    },
  },
});

export const { movePiece, revert, updateSelectedSquare } =
  boardStateSlice.actions;

export default boardStateSlice.reducer;
