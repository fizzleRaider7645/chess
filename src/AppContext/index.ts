import { createContext } from "react";
import { AppContextType } from "./types";
import { gameState } from "./gameState";

export const AppContext = createContext<AppContextType>({
  gameState,
  setGameState: () => {},
});
