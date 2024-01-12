import { Board } from "../types";

export interface ChessboardContextType {
  chessBoard: Board;
  setChessBoard: React.Dispatch<React.SetStateAction<Board>>;
}
