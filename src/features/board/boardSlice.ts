import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState } from "./types";

const initialState: BoardState = {
  board: initialBoardSetup(),
  selectedSquare: null,
};

const boardStateSlice = createSlice({
  name: "boardState",
  initialState,
  reducers: {
    movePiece: () => {},
    updateBoard: () => {},
  },
});

export const { movePiece, updateBoard } = boardStateSlice.actions;

export default boardStateSlice.reducer;
