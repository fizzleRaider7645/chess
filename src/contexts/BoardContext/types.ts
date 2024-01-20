import { Piece, Position } from "../../componets/atoms/Piece/types";
import { SquareProps } from "../../componets/atoms/Square/types";
import { Board } from "../../componets/organisms/Board/types";

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
