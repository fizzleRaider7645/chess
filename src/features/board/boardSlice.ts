import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState, MoveActionType } from "./types";
import { PieceColors, Position } from "../../components/atoms/Piece/types";

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
    // remove conditional logic at some point
    movePiece: (state, { payload }: PayloadAction<MoveActionType>) => {
      const { currentPosition, nextPosition } = payload;
      if (state.selectedPiece) {
        state.selectedPiece.turn = (state.selectedPiece.turn ?? 0) + 1;
      }
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
      const previousBoard = state.gameFrames[state.gameFrames.length - 1];
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
