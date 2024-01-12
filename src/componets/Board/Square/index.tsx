import Piece from "../../Piece";
import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { PieceColors } from "../../Piece/types";

const Square = ({
  columnIndex,
  rowIndex,
  piece,
  updateBoard,
}: SquareProps): JSX.Element => {
  const isDark = rowIndex % 2 ? columnIndex % 2 === 0 : columnIndex % 2 !== 0;

  const renderPiece = () => {
    if (piece) {
      return (
        <Piece
          color={
            piece.color === PieceColors.White
              ? PieceColors.White
              : PieceColors.Black
          }
          label={piece.label}
          position={{ row: rowIndex, col: columnIndex }}
        />
      );
    }
    return null;
  };

  return (
    <SquareElement $isDark={isDark} onClick={() => updateBoard}>
      {renderPiece()}
    </SquareElement>
  );
};

export default Square;
