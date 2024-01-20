import { SquareElement } from "../../organisms/Board/subcomponents";
import { SquareProps } from "./types";
import { useContext } from "react";
import { determineIsDark } from "./helpers";
import Piece from "../Piece";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  // const { setSelectedSquare } = useContext(BoardContext);

  const isDark = determineIsDark(columnIndex, rowIndex);

  const onClickHandler = () => {
    // setSelectedSquare({ columnIndex, rowIndex });
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      <Piece position={{ row: rowIndex, col: columnIndex }} />
    </SquareElement>
  );
};

export default Square;
