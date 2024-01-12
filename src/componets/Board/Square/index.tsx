import { SquareElement } from "../subcomponents";
import { SquareProps } from "./types";
import { useContext } from "react";
import { Context } from "../Context";
import { PieceToRender } from "./subcomponents";
import { determineIsDark } from "./helpers";

const Square = ({ columnIndex, rowIndex, piece }: SquareProps): JSX.Element => {
  const { setChessBoard } = useContext(Context);

  const isDark = determineIsDark(columnIndex, rowIndex);

  return (
    <SquareElement $isDark={isDark} onClick={() => setChessBoard}>
      <PieceToRender
        piece={piece}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
      />
    </SquareElement>
  );
};

export default Square;
