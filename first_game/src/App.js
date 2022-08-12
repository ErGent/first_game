import Memoryrandom from "./Memoryrandom";
import "./App.css";
import Memorygame from "./Memorygame";

function App() {
  return (
    <div className="App">
      <Memoryrandom
        animals={[
          { name: "Elephant" },
          { name: "Elephant" },
          { name: "Bee" },
          { name: "Bee" },
          { name: "Esme" },
          { name: "Esme" },
          { name: "Octopus" },
          { name: "Octopus" },
          { name: "Sea Lion" },
          { name: "Sea Lion" },
          { name: "Wasp" },
          { name: "Wasp" },
        ]}
      />
      <div>
        <h1>
          <Memorygame />
        </h1>
      </div>
    </div>
  );
}

export default App;
