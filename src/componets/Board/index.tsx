import React, { useState } from "react";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";
import { Board as ChessBoard } from "./types";
import { initialBoardSetup } from "./BoardContext/boardState";
import { BoardContext } from "./BoardContext";
import { Piece } from "../Piece/types";

const Board: React.FC = () => {
  const [chessBoard, setChessBoard] = useState<ChessBoard>(initialBoardSetup());
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  return (
    <ParentContainer>
      <Container>
        <BoardContext.Provider
          value={{ chessBoard, setChessBoard, selectedPiece, setSelectedPiece }}
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
