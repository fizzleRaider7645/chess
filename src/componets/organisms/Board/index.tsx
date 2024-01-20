import React, { useState } from "react";
import Row from "../../molecules/Row";
import { Container, ParentContainer } from "./subcomponents";
import { Board as ChessBoard } from "./types";
import { initialBoardSetup } from "../../../contexts/BoardContext/boardState";
import { BoardContext } from "../../../contexts/BoardContext";
import { SquareProps } from "../../atoms/Square/types";
import { PieceData } from "../../../contexts/BoardContext/types";

const Board: React.FC = () => {
  const [chessBoard, setChessBoard] = useState<ChessBoard>(initialBoardSetup());
  const [selectedSquare, setSelectedSquare] = useState<SquareProps | null>(
    null
  );
  const [selectedPieceData, setSelectedPieceData] = useState<PieceData | null>(
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
            selectedPieceData,
            setSelectedPieceData,
          }}
        >
          {chessBoard.map((_, rowIndex) => (
            <Row key={`row-${rowIndex}`} rowIndex={rowIndex} />
          ))}
        {/* </BoardContext.Provider> */}
      </Container>
    </ParentContainer>
  );
};

export default Board;
