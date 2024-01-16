import React, { useState } from "react";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";
import { Board as ChessBoard } from "./types";
import { initialBoardSetup } from "./BoardContext/boardState";
import { BoardContext } from "./BoardContext";
import { SquareProps } from "./Square/types";

const Board: React.FC = () => {
  const [chessBoard, setChessBoard] = useState<ChessBoard>(initialBoardSetup());
  const [selectedSquare, setSelectedSquare] = useState<SquareProps | null>(
    null
  );

  return (
    <ParentContainer>
      <Container>
        <BoardContext.Provider
          value={{
            chessBoard,
            setChessBoard,
            selectedSquare,
            setSelectedSquare,
          }}
        >
          {chessBoard.map((_, rowIndex) => (
            <Row key={`row-${rowIndex}`} rowIndex={rowIndex} />
          ))}
        </BoardContext.Provider>
      </Container>
    </ParentContainer>
  );
};

export default Board;
