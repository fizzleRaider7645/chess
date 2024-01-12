import React from "react";
import { size } from "../../const";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";

const Board: React.FC = () => {
  return (
    <ParentContainer>
      <Container>
        {Array.from({ length: size }, (_, rowIndex) => (
          <Row key={`row-${rowIndex}`} rowIndex={rowIndex} />
        ))}
      </Container>
    </ParentContainer>
  );
};

export default Board;
