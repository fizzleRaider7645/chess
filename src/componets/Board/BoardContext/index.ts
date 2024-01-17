import { createContext } from "react";
import { initialBoardSetup } from "./boardState";
import { BoardContextType } from "./types";

export const BoardContext = createContext<BoardContextType>({
  chessBoard: initialBoardSetup(), // Provide initial setup as default
  setChessBoard: () => {}, // Provide a default no-op function
  selectedSquare: null,
  setSelectedSquare: () => {},
  selectedPiece: null,
  setSelectedPiece: () => {},
});
