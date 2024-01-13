import { Piece } from "../../Piece/types";
import { Board } from "../types";

export interface BoardContextType {
  chessBoard: Board;
  setChessBoard: React.Dispatch<React.SetStateAction<Board>>;
  selectedPiece: Piece | null;
  setSelectedPiece: React.Dispatch<React.SetStateAction<Piece | null>>;
}
