import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { useContext } from "react";
import { Context } from "../Context";
import { PieceToRender } from "./subcomponents";
import { determineIsDark } from "./helpers";
import { PieceColors, PieceLabels } from "../../Piece/types";

const Square = ({ columnIndex, rowIndex, piece }: SquareProps): JSX.Element => {
  const { chessBoard, setChessBoard, selectedPiece, setSelectedPiece } =
    useContext(Context);

  const isDark = determineIsDark(columnIndex, rowIndex);

  const onClickHandler = () => {
    setSelectedPiece(piece);
    // const pieceToMove = {
    //   label: PieceLabels.Pawn,
    //   color: PieceColors.White,
    //   position: { row: rowIndex, col: columnIndex },
    // };
    console.log(
      `columnIndex: ${columnIndex}`,
      `rowIndex: ${rowIndex}`,
      selectedPiece
    );
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      <PieceToRender
        piece={piece}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
      />
    </SquareElement>
  );
};

export default Square;
