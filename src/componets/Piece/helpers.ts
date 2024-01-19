import { DetermineIsSelectedProps, PieceColors, PieceLabels } from "./types";
import WhitePawn from "../../assets/pieces/white/pawn.svg";
import BlackPawn from "../../assets/pieces/black/pawn.svg";
import WhiteRook from "../../assets/pieces/white/rook.svg";
import BlackRook from "../../assets/pieces/black/rook.svg";
import WhiteKnight from "../../assets/pieces/white/knight.svg";
import BlackKnight from "../../assets/pieces/black/knight.svg";
import WhiteBishop from "../../assets/pieces/white/bishop.svg";
import BlackBishop from "../../assets/pieces/black/bishop.svg";
import WhiteQueen from "../../assets/pieces/white/queen.svg";
import BlackQueen from "../../assets/pieces/black/queen.svg";
import WhiteKing from "../../assets/pieces/white/king.svg";
import BlackKing from "../../assets/pieces/black/king.svg";
import { Board } from "../Board/types";
import { PieceData } from "../Board/BoardContext/types";
import { SquareProps } from "../Board/Square/types";

export const generateUniqueId = () => {
  return Math.random().toString(36).substring(7);
};

export const determineIsSelected = ({
  selectedSquare,
  rowIndex,
  columnIndex,
}: DetermineIsSelectedProps): boolean => {
  return !!(
    selectedSquare?.rowIndex === rowIndex &&
    selectedSquare?.columnIndex === columnIndex
  );
};

export const pieceMap = {
  [PieceLabels.Pawn]: {
    [PieceColors.White]: WhitePawn,
    [PieceColors.Black]: BlackPawn,
  },
  [PieceLabels.Rook]: {
    [PieceColors.White]: WhiteRook,
    [PieceColors.Black]: BlackRook,
  },
  [PieceLabels.Knight]: {
    [PieceColors.White]: WhiteKnight,
    [PieceColors.Black]: BlackKnight,
  },
  [PieceLabels.Bishop]: {
    [PieceColors.White]: WhiteBishop,
    [PieceColors.Black]: BlackBishop,
  },
  [PieceLabels.Queen]: {
    [PieceColors.White]: WhiteQueen,
    [PieceColors.Black]: BlackQueen,
  },
  [PieceLabels.King]: {
    [PieceColors.White]: WhiteKing,
    [PieceColors.Black]: BlackKing,
  },
};

/**
 * what does it mean to move a piece (not in a deep sense)?
 * a piece is selected
 *  - a piece is selectable if it's that color's turn
 *  - a piece is selected when a user clicks on a square with that  piece
 * a square is selected
 *  - a square is selected when a piece is on it
 *  - a piece is placed on that square if a piece is selected
 *  - a piece is placed on that square if it is empty
 *  - a piece is placed on that square if it's a valid move for that piece
 * the piece is moved to that square
 *  - that square now containeds the piece
 *  - the piece's previous square is not empty
 */

interface MoveToProps {
  pieceData: PieceData | null;
  boardState: Board;
  selectedSquare: SquareProps | null;
  setChessBoard: React.Dispatch<React.SetStateAction<Board>>;
  setSelectedPieceData: React.Dispatch<React.SetStateAction<PieceData | null>>;
}

// I hate this + make all this better
export const movePiece = ({
  pieceData,
  boardState,
  selectedSquare,
  setSelectedPieceData,
  setChessBoard,
}: MoveToProps): void => {
  const boardCopy = boardState.map((row) => [...row]);
  if (
    pieceData?.piece &&
    pieceData?.position &&
    selectedSquare &&
    selectedSquare.rowIndex !== pieceData.position.row &&
    selectedSquare.columnIndex !== pieceData.position.col
  ) {
    boardCopy[selectedSquare.rowIndex][selectedSquare.columnIndex] =
      pieceData.piece;
    boardCopy[pieceData.position.row][pieceData.position.col] = null;
    setChessBoard(boardCopy);
    setSelectedPieceData(null);
  }
};
