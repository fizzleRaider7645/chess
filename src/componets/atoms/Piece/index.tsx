import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, pieceMap } from "./helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Piece = ({ position }: PieceProps): JSX.Element | "" => {
  const { board, selectedSquare } = useSelector(
    ({ boardState }: RootState) => boardState
  );

  const pieceOnSelectedSquare: PieceType | null =
    board[position?.row][position?.col];

  const pieceToRender =
    (pieceOnSelectedSquare &&
      pieceMap[pieceOnSelectedSquare.label]?.[pieceOnSelectedSquare.color]) ??
    "";

  const isSelected = determineIsSelected({
    selectedSquare,
    rowIndex: position.row,
    columnIndex: position.col,
  });

  return pieceToRender ? (
    <SVGImage
      src={pieceToRender}
      alt={`${pieceOnSelectedSquare?.color} ${pieceOnSelectedSquare?.label}`}
      $isSelected={isSelected}
    />
  ) : (
    ""
  );
};

export default Piece;
