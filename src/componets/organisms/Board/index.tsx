import React from "react";
import Row from "../../molecules/Row";
import { Container, ParentContainer } from "./subcomponents";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch } from "react-redux";
import { attemptRevert } from "../../../features/board/middleWare";
const Board: React.FC = () => {
  const chessBoard = useSelector(
    ({ boardState: { board } }: RootState) => board
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <ParentContainer>
      <button onClick={() => dispatch(attemptRevert())}>Reset</button>
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
