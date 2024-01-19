import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, movePiece, pieceMap } from "./helpers";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../Board/BoardContext";

const Piece = ({ position: startingPositon }: PieceProps): JSX.Element | "" => {
  const {
    selectedSquare,
    chessBoard,
    selectedPieceData,
    setSelectedPieceData,
  } = useContext(BoardContext);

  const [moveHistory, setMoveHistory] = useState([startingPositon]);

  const currentPosition = moveHistory[moveHistory.length - 1];

  const pieceOnSelectedSquare: PieceType | null =
    chessBoard[currentPosition?.row][currentPosition?.col];

  const pieceToRender =
    (pieceOnSelectedSquare &&
      pieceMap[pieceOnSelectedSquare.label]?.[pieceOnSelectedSquare.color]) ??
    "";

  const isSelected = determineIsSelected({
    selectedSquare,
    rowIndex: currentPosition?.row,
    columnIndex: currentPosition?.col,
  });

  useEffect(() => {
    if (isSelected) {
      setSelectedPieceData({
        piece: pieceOnSelectedSquare,
        position: currentPosition,
      });

      movePiece({ pieceData: selectedPieceData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSquare?.rowIndex, selectedSquare?.columnIndex]);

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
