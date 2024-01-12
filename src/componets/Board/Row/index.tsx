import { size } from "../../../const";
import Square from "../Square";
import { RowElement } from "../subcomponents";

const Row = (rowIndex: number): JSX.Element => {
  return (
    <RowElement key={`row-${rowIndex}`}>
      {Array.from({ length: size }, (_, columnIndex) =>
        Square({ columnIndex, rowIndex })
      )}
    </RowElement>
  );
};

export default Row;
