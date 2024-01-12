import React, { useState } from "react";
import { size } from "../../const";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";
import { Board as ChessBoard } from "./types";
import { initialBoardSetup } from "./helpers";

const Board: React.FC = () => {
  const [chessBoard, setChessBoard] = useState<ChessBoard>(initialBoardSetup());

  return (
    <ParentContainer>
      <Container>
        {Array.from({ length: size }, (_, rowIndex) => (
          <Row
            key={`row-${rowIndex}`}
            rowIndex={rowIndex}
            rowData={chessBoard[rowIndex]}
            updateBoard={setChessBoard}
          />
        ))}
      </Container>
    </ParentContainer>
  );
};

export default Board;
