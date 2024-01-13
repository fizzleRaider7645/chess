import { Board } from "../componets/Board/types";
import { PieceColors } from "../componets/Piece/types";

export interface GameState {
  turns: number;
  currentPlayer: PieceColors.White | PieceColors.Black;
  data: Board;
}

export interface AppContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export type TransformerType = "TAKE_TURN" | "REVERT_TURN";

export interface TransformerAction {
  type: TransformerType;
}

export interface StateUpdateProps {
  gameState: GameState;
  action: TransformerAction;
  transformer: (gameState: GameState) => GameState;
}
