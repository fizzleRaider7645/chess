import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { BoardState } from "./types";
import { Position } from "../../componets/atoms/Piece/types";

const initialState: BoardState = {
  board: initialBoardSetup(),
  selectedSquare: null,
};

const boardStateSlice = createSlice({
  name: "boardState",
  initialState,
  reducers: {
    movePiece: () => {},
    revert: () => {},
    updateSelectedSquare: (state, action: PayloadAction<Position>) => {
      state.selectedSquare = action.payload;
    },
  },
});

export const { movePiece, revert, updateSelectedSquare } =
  boardStateSlice.actions;

export default boardStateSlice.reducer;
