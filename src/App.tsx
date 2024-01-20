import { useState } from "react";
import { initialGameState } from "./contexts/AppContext/gameState";
import { GameState } from "./contexts/AppContext/types";
import Board from "./componets/organisms/Board";
import { AppContext } from "./contexts/AppContext";
// import { Provider } from "react-redux";

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  return (
    <AppContext.Provider value={{ gameState, setGameState }}>
      {/* <Provider> */}
      <Board />
      {/* </Provider> */}
    </AppContext.Provider>
  );
}

export default App;
