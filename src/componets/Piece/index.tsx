import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, pieceMap } from "./helpers";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../Board/BoardContext";

const Piece = ({ position: startingPositon }: PieceProps): JSX.Element | "" => {
  const { selectedSquare, chessBoard } = useContext(BoardContext);

  const [moveHistory, setMoveHistory] = useState([startingPositon]);

  const currentPosition = moveHistory[moveHistory.length - 1];

  const pieceData: PieceType | null =
    chessBoard[currentPosition?.row][currentPosition?.col];

  const pieceToRender =
    (pieceData && pieceMap[pieceData.label]?.[pieceData.color]) ?? "";

  const isSelected = determineIsSelected({
    selectedSquare,
    rowIndex: currentPosition?.row,
    columnIndex: currentPosition?.col,
  });

  useEffect(() => {}, [selectedSquare?.rowIndex, selectedSquare?.columnIndex]);

  return pieceToRender ? (
    <SVGImage
      src={pieceToRender}
      alt={`${pieceData?.color} ${pieceData?.label}`}
      $isSelected={isSelected}
    />
  ) : (
    ""
  );
};

export default Piece;
