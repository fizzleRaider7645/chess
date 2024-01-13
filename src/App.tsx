import { useState } from "react";
import { gameState } from "./AppContext/gameState";
import { GameState } from "./AppContext/types";
import Board from "./componets/Board";
import { AppContext } from "./AppContext";

function App() {
  const [getGameState, setGameState] = useState<GameState>(gameState);

  return (
    <AppContext.Provider value={{ gameState: getGameState, setGameState }}>
      <Board />
    </AppContext.Provider>
  );
}

export default App;
