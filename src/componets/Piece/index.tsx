import { PieceProps, Piece as PieceType } from "./types";
import { SVGImage } from "./subcomponents";
import { determineIsSelected, pieceMap } from "./helpers";
import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../Board/BoardContext";

/**
 * clean this up
 */
const Piece = ({ position: startingPositon }: PieceProps): JSX.Element | "" => {
  const [moveHistory, setMoveHistory] = useState([startingPositon]);

  const currentPosition = moveHistory[moveHistory.length - 1];

  const { selectedSquare, chessBoard, selectedPiece, setSelectedPiece } =
    useContext(BoardContext);

  const [isSelected, setIsSelected] = useState(false);

  const pieceData: PieceType | null =
    chessBoard[currentPosition?.row][currentPosition?.col];

  const pieceToRender =
    (pieceData && pieceMap[pieceData.label]?.[pieceData.color]) ?? "";

  const onClickHandler = (isPieceOnSelectedSquare, setIsSelected) => {
    if (isPieceOnSelectedSquare) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    setIsSelected(
      determineIsSelected({
        selectedSquare,
        rowIndex: currentPosition?.row,
        columnIndex: currentPosition?.col,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSquare?.rowIndex, selectedSquare?.columnIndex]);

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
