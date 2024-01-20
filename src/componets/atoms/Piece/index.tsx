import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, pieceMap } from "./helpers";
import { useContext, useEffect } from "react";
import { BoardContext } from "../../../contexts/BoardContext";

const Piece = ({ position }: PieceProps): JSX.Element | "" => {
  const { selectedSquare, chessBoard } = useContext(BoardContext);

  const pieceOnSelectedSquare: PieceType | null =
    chessBoard[position?.row][position?.col];

  const pieceToRender =
    (pieceOnSelectedSquare &&
      pieceMap[pieceOnSelectedSquare.label]?.[pieceOnSelectedSquare.color]) ??
    "";

  const isSelected = determineIsSelected({
    selectedSquare,
    rowIndex: position?.row,
    columnIndex: position?.col,
  });

  useEffect(() => {}, [selectedSquare?.rowIndex, selectedSquare?.columnIndex]);

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
