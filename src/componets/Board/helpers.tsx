import { Row, Square } from "./subcomponents";
import { SquareProps } from "./types";

const renderSquare = ({ i, row }: SquareProps): JSX.Element => {
  // Determine if the square should be dark or light
  const isDark = row % 2 ? i % 2 === 0 : i % 2 !== 0;
  return <Square key={`square-${row}-${i}`} $isDark={isDark} />;
};

export const renderRow = (row: number): JSX.Element => {
  const size = 8; // Assuming size is the number of squares per row

  return (
    <Row key={`row-${row}`}>
      {Array.from({ length: size }, (_, i) => renderSquare({ i, row }))}
    </Row>
  );
};
