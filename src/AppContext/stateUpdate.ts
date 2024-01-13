import { GameState, StateUpdateProps } from "./types";

export const stateUpdate = ({
  gameState,
  action,
  transformer,
}: StateUpdateProps): GameState => {
  const gameStateCopy = { ...gameState };
  let newGameState: GameState;

  switch (action.type) {
    case "TAKE_TURN":
      newGameState = transformer(gameStateCopy);
      break;
    case "REVERT_TURN":
      newGameState = transformer(gameStateCopy);
      break;
    default:
      newGameState = gameStateCopy;
  }

  return newGameState;
};
