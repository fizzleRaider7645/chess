import { createContext } from "react";
import { AppContextType } from "./types";
import { initialGameState } from "./gameState";

export const AppContext = createContext<AppContextType>({
  gameState: initialGameState,
  setGameState: () => {},
});
