import { Piece, Position } from "../../Piece/types";
import { SquareProps } from "../Square/types";
import { Board } from "../types";

export interface PieceData {
  piece: Piece | null;
  position: Position | null;
}

export interface BoardContextType {
  chessBoard: Board;
  setChessBoard: React.Dispatch<React.SetStateAction<Board>>;
  selectedSquare: SquareProps | null;
  setSelectedSquare: React.Dispatch<React.SetStateAction<SquareProps | null>>;
  selectedPieceData: PieceData | null;
  setSelectedPieceData: React.Dispatch<React.SetStateAction<PieceData | null>>;
}
