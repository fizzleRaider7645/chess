import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, pieceMap } from "./helpers";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../Board/BoardContext";

/**
 * clean this up
 */
const Piece = ({ position: startingPositon }: PieceProps): JSX.Element | "" => {
  const { selectedSquare, chessBoard } = useContext(BoardContext);
  const [moveHistory, setMoveHistory] = useState([startingPositon]);
  const [isSelected, setIsSelected] = useState(false);

  const currentPosition = moveHistory[moveHistory.length - 1];

  const pieceData: PieceType | null =
    chessBoard[currentPosition?.row][currentPosition?.col];

  const pieceToRender =
    (pieceData && pieceMap[pieceData.label]?.[pieceData.color]) ?? "";

  const isPieceOnSelectedSquare: boolean = determineIsSelected({
    selectedSquare,
    rowIndex: currentPosition?.row,
    columnIndex: currentPosition?.col,
  });

  const onClickHandler = (isPieceOnSelectedSquare, setIsSelected) => {
    if (isPieceOnSelectedSquare) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  useEffect(() => {}, [selectedSquare?.rowIndex, selectedSquare?.columnIndex]);

  return pieceToRender ? (
    <SVGImage
      src={pieceToRender}
      alt={`${pieceData?.color} ${pieceData?.label}`}
      $isSelected={isSelected}
      onClick={() => onClickHandler(isPieceOnSelectedSquare, setIsSelected)}
    />
  ) : (
    ""
  );
};

export default Piece;
