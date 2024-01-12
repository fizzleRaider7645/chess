import { Row } from "./helpers";
import { Container, ParentContainer } from "./subcomponents";

const Board: React.FC = () => {
  return (
    <ParentContainer>
      <Container>{Array.from({ length: 8 }, (_, row) => Row(row))}</Container>
    </ParentContainer>
  );
};

export default Board;
