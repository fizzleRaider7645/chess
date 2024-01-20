import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialBoardSetup } from "../../contexts/BoardContext/boardState";
import { Board } from "../../componets/organisms/Board/types";

const initialState: Board = [...initialBoardSetup()];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});
