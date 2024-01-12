import { size } from "../../const";
import { PieceColors, PieceLabels } from "../Piece/types";
import { Board } from "./types";

export const initialBoardSetup = (): Board => {
  const board: Board = Array(8)
    .fill(null)
    .map(() => Array(size).fill(null));

  // Set up PieceLabels.PieceLabels.Pawns
  for (let i = 0; i < size; i++) {
    board[1][i] = {
      label: PieceLabels.Pawn,
      color: PieceColors.Black,
      position: { row: 1, col: i },
    };
    board[6][i] = {
      label: PieceLabels.Pawn,
      color: PieceColors.White,
      position: { row: 6, col: i },
    };
  }

  // Place Rooks
  board[0][0] = board[0][7] = {
    label: PieceLabels.Rook,
    color: PieceColors.Black,
    position: { row: 0, col: 0 },
  };
  board[7][0] = board[7][7] = {
    label: PieceLabels.Rook,
    color: PieceColors.White,
    position: { row: 7, col: 0 },
  };

  // Place Knights
  board[0][1] = board[0][6] = {
    label: PieceLabels.Knight,
    color: PieceColors.Black,
    position: { row: 0, col: 1 },
  };
  board[7][1] = board[7][6] = {
    label: PieceLabels.Knight,
    color: PieceColors.White,
    position: { row: 7, col: 1 },
  };

  // Place Bishops
  board[0][2] = board[0][5] = {
    label: PieceLabels.Bishop,
    color: PieceColors.Black,
    position: { row: 0, col: 2 },
  };
  board[7][2] = board[7][5] = {
    label: PieceLabels.Bishop,
    color: PieceColors.White,
    position: { row: 7, col: 2 },
  };

  // Place Queens
  board[0][3] = {
    label: PieceLabels.Queen,
    color: PieceColors.Black,
    position: { row: 0, col: 3 },
  };
  board[7][3] = {
    label: PieceLabels.Queen,
    color: PieceColors.White,
    position: { row: 7, col: 3 },
  };

  // Place Kings
  board[0][4] = {
    label: PieceLabels.King,
    color: PieceColors.Black,
    position: { row: 0, col: 4 },
  };
  board[7][4] = {
    label: PieceLabels.King,
    color: PieceColors.White,
    position: { row: 7, col: 4 },
  };

  return board;
};
