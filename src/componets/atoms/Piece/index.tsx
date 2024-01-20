import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { pieceMap } from "./helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Piece = ({ position }: PieceProps): JSX.Element | "" => {
  const chessBoard = useSelector(
    ({ boardState: { board } }: RootState) => board
  );

  const pieceOnSelectedSquare: PieceType | null =
    chessBoard[position?.row][position?.col];

  const pieceToRender =
    (pieceOnSelectedSquare &&
      pieceMap[pieceOnSelectedSquare.label]?.[pieceOnSelectedSquare.color]) ??
    "";

  return pieceToRender ? (
    <SVGImage
      src={pieceToRender}
      alt={`${pieceOnSelectedSquare?.color} ${pieceOnSelectedSquare?.label}`}
      $isSelected={false}
    />
  ) : (
    ""
  );
};

export default Piece;
