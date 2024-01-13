import { boardState } from "../componets/Board/BoardContext/boardState";
import { PieceColors } from "../componets/Piece/types";
import { GameState } from "./types";

export const initialGameState: GameState = {
  turns: 0,
  currentPlayer: PieceColors.White,
  data: boardState,
};
