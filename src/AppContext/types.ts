import { PieceColors } from "../componets/Piece/types";

export interface GameState {
  currentTurn: PieceColors.White | PieceColors.Black;
}

export interface AppContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}
