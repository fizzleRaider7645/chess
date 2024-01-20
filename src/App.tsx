import Board from "./componets/organisms/Board";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;
