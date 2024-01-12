import Piece from "../../Piece";
import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { PieceColors } from "../../Piece/types";
import { useContext } from "react";
import { Context } from "../Context";

const Square = ({ columnIndex, rowIndex, piece }: SquareProps): JSX.Element => {
  const { setChessBoard } = useContext(Context);

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
    <SquareElement $isDark={isDark} onClick={() => setChessBoard}>
      {renderPiece()}
    </SquareElement>
  );
};

export default Square;
