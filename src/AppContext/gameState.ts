import { Board } from "../componets/Board/types";
import { PieceColors } from "../componets/Piece/types";
import { GameState } from "./types";

export const initialGameState: GameState = {
  turn: 0,
  currentPlayer: PieceColors.White,
  gameFrames: [],
};

export const updateGameState = (
  board: Board,
  gameState: GameState
): GameState => {
  const boardCopy = board.map((row) => [...row]);
  const updatedState: GameState = {
    ...gameState,
    turn: ++gameState.turn,
    currentPlayer:
      gameState.currentPlayer === PieceColors.White
        ? PieceColors.Black
        : PieceColors.White,
    gameFrames: [...gameState.gameFrames, boardCopy],
  };

  return updatedState;
};
