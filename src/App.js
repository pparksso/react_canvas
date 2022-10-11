import "./css/reset.css";
import "./css/style.css";
import { Provider } from "react-redux";
import Canvas from "./components/Canvas";
import UtilBtn from "./components/UtilBtn";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Canvas />
        <UtilBtn />
      </div>
    </Provider>
  );
}

export default App;
