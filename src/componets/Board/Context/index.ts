// Context.js (or wherever you define your context)
import { createContext } from "react";
import { initialBoardSetup } from "./boardState";
import { ChessboardContextType } from "./types";

export const Context = createContext<ChessboardContextType>({
  chessBoard: initialBoardSetup(), // Provide initial setup as default
  setChessBoard: () => {}, // Provide a default no-op function
  selectedPiece: null,
  setSelectedPiece: () => {},
});
