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
        const updatedPiece = {
          ...state.selectedPiece,
          timesMoved: (state.selectedPiece.timesMoved ?? 0) + 1,
        };
        state.board[nextPosition.row][nextPosition.col] = updatedPiece;
      }
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
      state.selectedPiece?.timesMoved && state.selectedPiece.timesMoved - 1;
      state.selectedPiece = null;
    },
    updateSelectedSquare: (state, { payload }: PayloadAction<Position>) => {
      const clickedPiece = state.board[payload.row][payload.col];

      // If clicking on an opponent's piece, clear selection
      if (clickedPiece && clickedPiece.color !== state.turn) {
        state.selectedSquare = null;
        state.selectedPiece = null;
        return;
      }

      // If clicking on a piece of the current turn's color, select it
      if (clickedPiece && clickedPiece.color === state.turn) {
        state.selectedSquare = payload;
        state.selectedPiece = clickedPiece;
        return;
      }

      // If clicking on an empty square and we have a selected piece, keep the selection
      if (!clickedPiece && state.selectedPiece) {
        state.selectedSquare = payload;
      }
    },
  },
});

export const { movePiece, revert, updateSelectedSquare } =
  boardStateSlice.actions;

export default boardStateSlice.reducer;
