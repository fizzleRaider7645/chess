import { useState } from "react";
import { initialBoardSetup } from "../contexts/BoardContext/boardState";
import { SquareProps } from "../componets/atoms/Square/types";
import { PieceData } from "../contexts/BoardContext/types";
import { Board } from "../componets/organisms/Board/types";

const useBoard = () => {
  const [chessBoard, setChessBoard] = useState<Board>(initialBoardSetup());
  const [selectedSquare, setSelectedSquare] = useState<SquareProps | null>(
    null
  );
  const [selectedPieceData, setSelectedPieceData] = useState<PieceData | null>(
    null
  );
};

export default useMove;
