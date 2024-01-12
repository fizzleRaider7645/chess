import { size } from "../../const";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";

const Board: React.FC = () => {
  return (
    <ParentContainer>
      <Container>
        {Array.from({ length: size }, (_, row) => Row(row))}
      </Container>
    </ParentContainer>
  );
};

export default Board;
