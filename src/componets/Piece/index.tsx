import { PieceLabels, Piece as ChessPiece, PieceColors } from "./types";
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

const Piece = ({ color, label }: ChessPiece): JSX.Element => {
  const pieceMap = {
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

  const pieceToRender = pieceMap[label]?.[color];

  return <img src={pieceToRender} alt={`${color} ${label}`} />;
};

export default Piece;
