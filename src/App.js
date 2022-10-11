import "./css/reset.css";
import "./css/style.css";
// import { BrowserRouter } from "react-router-dom";
import Canvas from "./components/Canvas";
import UtilBtn from "./components/UtilBtn";

function App() {
  return (
    <div className="App">
      <Canvas />
      <UtilBtn />
    </div>
  );
}

export default App;
