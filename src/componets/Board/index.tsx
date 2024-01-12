import React, { useState } from "react";
import { size } from "../../const";
import Row from "./Row";
import { Container, ParentContainer } from "./subcomponents";
import { Board as ChessBoard } from "./types";
import { initialBoardSetup } from "./helpers";
import { Context } from "./Context";
import { Piece } from "../Piece/types";

const Board: React.FC = () => {
  const [chessBoard, setChessBoard] = useState<ChessBoard>(initialBoardSetup());
  const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

  return (
    <ParentContainer>
      <Container>
        <Context.Provider
          value={{ chessBoard, setChessBoard, selectedPiece, setSelectedPiece }}
        >
          {Array.from({ length: size }, (_, rowIndex) => (
            <Row key={`row-${rowIndex}`} rowIndex={rowIndex} />
          ))}
        </Context.Provider>
      </Container>
    </ParentContainer>
  );
};

export default Board;
