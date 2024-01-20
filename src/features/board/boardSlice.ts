import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "./helpers";
import { Board } from "../../componets/organisms/Board/types";

const initialState: Board = [...initialBoardSetup()];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    movePiece: () => {},
    updateBoard: () => {},
  },
});

export const { movePiece, updateBoard } = boardSlice.actions;

export default boardSlice.reducer;
