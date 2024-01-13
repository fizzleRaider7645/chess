import { useState } from "react";
import { initialGameState } from "./AppContext/gameState";
import { GameState } from "./AppContext/types";
import Board from "./componets/Board";
import { AppContext } from "./AppContext";

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  return (
    <AppContext.Provider value={{ gameState, setGameState }}>
      <Board />
    </AppContext.Provider>
  );
}

export default App;
