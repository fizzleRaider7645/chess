import { SquareElement } from "../../organisms/Board/subcomponents";
import { SquareProps } from "./types";
import { determineIsDark } from "./helpers";
import Piece from "../Piece";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  const selectedSquare = useSelector(
    ({ boardState: { selectedSquare } }: RootState) => selectedSquare
  );
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
