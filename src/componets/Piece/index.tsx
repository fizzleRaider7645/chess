import { PieceLabels, PieceProps } from "./types";
import WhiteKing from "../../assets/pieces/white/king.svg";

const Piece: React.FC = ({ color, label }: PieceProps) => {
  let PieceSVG;

  switch (label) {
    case PieceLabels.Pawn:
      // import svg from path
      break;
    case PieceLabels.Rook:
      break;
    case PieceLabels.Knight:
      break;
    case PieceLabels.Bishop:
      break;
    case PieceLabels.Queen:
      break;
    case PieceLabels.King:
      PieceSVG = color === "white" ? <WhiteKing /> : "black";
      break;
    default:
      break;
  }
  // TODO Fix all this
  return PieceSVG ? <PieceSVG style={{ fill: color }} /> : null;
};

export default Piece;
