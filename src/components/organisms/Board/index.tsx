import React from "react";
import Row from "../../molecules/Row";
import { Container, ParentContainer } from "./subcomponents";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Board: React.FC = () => {
  const chessBoard = useSelector(
    ({ boardState: { board } }: RootState) => board
  );

  return (
    <ParentContainer>
      <Container>
        {chessBoard.map((_, rowIndex) => (
          <Row
            key={`row-${rowIndex}`}
            rowIndex={rowIndex}
            chessBoard={chessBoard}
          />
        ))}
      </Container>
    </ParentContainer>
  );
};

export default Board;
