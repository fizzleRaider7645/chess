import { renderRow } from "./helpers";
import { Container, ParentContainer } from "./subcomponents";

const Board: React.FC = () => {
  const size = 8;

  return (
    <ParentContainer>
      <Container>
        {Array.from({ length: size }, (_, row) => renderRow(row))}
      </Container>
    </ParentContainer>
  );
};

export default Board;
