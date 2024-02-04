import { size } from "../../const";
import { PieceColors, PieceLabels } from "../../componets/atoms/Piece/types";
import { Board } from "../../componets/organisms/Board/types";

export const boardState: Board = Array(size)
  .fill(null)
  .map(() => Array(size).fill(null));

export const initialBoardSetup = (): Board => {
  // Set up PieceLabels.PieceLabels.Pawns
  for (let i = 0; i < size; i++) {
    boardState[1][i] = {
      label: PieceLabels.Pawn,
      color: PieceColors.Black,
      position: { row: 1, col: i },
      turn: 0,
    };
    boardState[6][i] = {
      label: PieceLabels.Pawn,
      color: PieceColors.White,
      position: { row: 6, col: i },
      turn: 0,
    };
  }

  // Place Rooks
  boardState[0][0] = boardState[0][7] = {
    label: PieceLabels.Rook,
    color: PieceColors.Black,
    position: { row: 0, col: 0 },
    turn: 0,
  };
  boardState[7][0] = boardState[7][7] = {
    label: PieceLabels.Rook,
    color: PieceColors.White,
    position: { row: 7, col: 0 },
    turn: 0,
  };

  // Place Knights
  boardState[0][1] = boardState[0][6] = {
    label: PieceLabels.Knight,
    color: PieceColors.Black,
    position: { row: 0, col: 1 },
    turn: 0,
  };
  boardState[7][1] = boardState[7][6] = {
    label: PieceLabels.Knight,
    color: PieceColors.White,
    position: { row: 7, col: 1 },
    turn: 0,
  };

  // Place Bishops
  boardState[0][2] = boardState[0][5] = {
    label: PieceLabels.Bishop,
    color: PieceColors.Black,
    position: { row: 0, col: 2 },
    turn: 0,
  };
  boardState[7][2] = boardState[7][5] = {
    label: PieceLabels.Bishop,
    color: PieceColors.White,
    position: { row: 7, col: 2 },
    turn: 0,
  };

  // Place Queens
  boardState[0][3] = {
    label: PieceLabels.Queen,
    color: PieceColors.Black,
    position: { row: 0, col: 3 },
    turn: 0,
  };
  boardState[7][3] = {
    label: PieceLabels.Queen,
    color: PieceColors.White,
    position: { row: 7, col: 3 },
    turn: 0,
  };

  // Place Kings
  boardState[0][4] = {
    label: PieceLabels.King,
    color: PieceColors.Black,
    position: { row: 0, col: 4 },
    turn: 0,
  };
  boardState[7][4] = {
    label: PieceLabels.King,
    color: PieceColors.White,
    position: { row: 7, col: 4 },
    turn: 0,
  };

  return boardState;
};
