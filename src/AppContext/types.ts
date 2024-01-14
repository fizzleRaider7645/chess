import { Board } from "../componets/Board/types";
import { PieceColors } from "../componets/Piece/types";

export interface GameFrame {
  turn: number;
  currentPlayer: PieceColors.White | PieceColors.Black;
  boardState: Board;
}

export interface GameState {
  turn: number;
  currentPlayer: PieceColors.White | PieceColors.Black;
  gameFrames: Board[];
}

export interface AppContextType {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}
