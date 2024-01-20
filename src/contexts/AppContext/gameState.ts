import { Board } from "../../componets/organisms/Board/types";
import { PieceColors } from "../../componets/atoms/Piece/types";
import { GameState } from "./types";

export const initialGameState: GameState = {
  turn: 0,
  currentPlayer: PieceColors.White,
  data: { turn: 0, currentPlayer: PieceColors.White, gameFrames: [] },
};

export const updateGameState = (
  board: Board,
  gameState: GameState
): GameState => {
  const gameStateCopy = { ...gameState };
  const boardCopy = board.map((row) => [...row]);
  const updatedState: GameState = {
    ...gameStateCopy,
    turn: ++gameStateCopy.turn,
    currentPlayer:
      gameStateCopy.currentPlayer === PieceColors.White
        ? PieceColors.Black
        : PieceColors.White,
    data: {
      ...gameStateCopy.data,
      turn: gameStateCopy.turn,
      currentPlayer: gameStateCopy.currentPlayer,
      gameFrames: [...gameStateCopy.data.gameFrames, boardCopy],
    },
  };

  return updatedState;
};
