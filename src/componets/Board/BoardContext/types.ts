import { Piece } from "../../Piece/types";
import { SquareProps } from "../Square/types";
import { Board } from "../types";

export interface BoardContextType {
  chessBoard: Board;
  setChessBoard: React.Dispatch<React.SetStateAction<Board>>;
  selectedSquare: SquareProps | null;
  setSelectedSquare: React.Dispatch<React.SetStateAction<SquareProps | null>>;
  selectedPiece: Piece | null;
  setSelectedPiece: React.Dispatch<React.SetStateAction<Piece | null>>;
}
