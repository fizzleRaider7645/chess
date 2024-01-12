import { PieceLabels, PieceProps } from "./types";
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

const Piece = ({ color, label }: PieceProps): JSX.Element => {
  const colors = { WHITE: "white", BLACK: "black" };

  const pieceMap = {
    [PieceLabels.Pawn]: {
      [colors.WHITE]: WhitePawn,
      [colors.BLACK]: BlackPawn,
    },
    [PieceLabels.Rook]: {
      [colors.WHITE]: WhiteRook,
      [colors.BLACK]: BlackRook,
    },
    [PieceLabels.Knight]: {
      [colors.WHITE]: WhiteKnight,
      [colors.BLACK]: BlackKnight,
    },
    [PieceLabels.Bishop]: {
      [colors.WHITE]: WhiteBishop,
      [colors.BLACK]: BlackBishop,
    },
    [PieceLabels.Queen]: {
      [colors.WHITE]: WhiteQueen,
      [colors.BLACK]: BlackQueen,
    },
    [PieceLabels.King]: {
      [colors.WHITE]: WhiteKing,
      [colors.BLACK]: BlackKing,
    },
  };

  const pieceToRender = pieceMap[label]?.[color];

  return <img src={pieceToRender} />;
};

export default Piece;
