import { SquareElement } from "../../organisms/Board/subcomponents";
import { SquareProps } from "./types";
import { determineIsDark } from "./helpers";
import Piece from "../Piece";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { updateSelectedSquare } from "../../../features/board/boardSlice";

const Square = ({ columnIndex, rowIndex }: SquareProps): JSX.Element => {
  const dispatch = useDispatch();
  const isDark = determineIsDark(columnIndex, rowIndex);

  const onClickHandler = () => {
    dispatch(updateSelectedSquare({ col: columnIndex, row: rowIndex }));
  };

  return (
    <SquareElement $isDark={isDark} onClick={onClickHandler}>
      <Piece position={{ row: rowIndex, col: columnIndex }} />
    </SquareElement>
  );
};

export default Square;
