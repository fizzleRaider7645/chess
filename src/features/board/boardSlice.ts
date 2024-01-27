import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState, MoveActionType } from "./types";
import { PieceColors, Position } from "../../componets/atoms/Piece/types";

const initialState: BoardState = {
  board: initialBoardSetup(),
  selectedSquare: null,
  selectedPiece: null,
  turn: PieceColors.White,
  gameFrames: [initialBoardSetup()],
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
      state.turn =
        state.turn === PieceColors.White
          ? PieceColors.Black
          : PieceColors.White;
    },
    revert: (state) => {
      const previousBoard = state.gameFrames[state.gameFrames.length - 2];
      state.board = previousBoard;
      state.gameFrames.pop();
      state.selectedSquare = null;
      state.selectedPiece = null;
    },
    updateSelectedSquare: (state, { payload }: PayloadAction<Position>) => {
      state.selectedSquare = payload;
      state.selectedPiece = state.board[payload.row][payload.col];
    },
  },
});

export const { movePiece, revert, updateSelectedSquare } =
  boardStateSlice.actions;

export default boardStateSlice.reducer;
