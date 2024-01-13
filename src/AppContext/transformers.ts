import { PieceColors } from "../componets/Piece/types";
import { GameState } from "./types";

export const takeTurnTransformer = (gameState: GameState): GameState => {
  const newState = {
    ...gameState,
    turns: ++gameState.turns,
    currentPlayer:
      gameState.currentPlayer === PieceColors.White
        ? PieceColors.Black
        : PieceColors.White,
    data: [...gameState.data.map((row) => [...row])],
  };

  return newState;
};
