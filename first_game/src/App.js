import Memoryrandom from "./Memoryrandom";
import "./App.css";
import Memorygame from "./Memorygame";

function App() {
  return (
    <div className="App">
      <Memoryrandom />
      <div>
        <h1>
          <Memorygame />
        </h1>
      </div>
    </div>
  );
}

export default App;
