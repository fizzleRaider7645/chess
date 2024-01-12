import Piece from "../../Piece";
import { PieceColors } from "../../Piece/types";
import { PieceToRenderProps } from "./types";

export const PieceToRender = ({
  piece,
  rowIndex,
  columnIndex,
}: PieceToRenderProps) => {
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
