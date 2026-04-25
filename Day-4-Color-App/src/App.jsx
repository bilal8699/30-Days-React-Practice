import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ background: color }}>
      
      <div className="card">
        <h1>🎨 Color Changer</h1>

        <button className="red" onClick={() => setColor("red")}>
          Red
        </button>

        <button className="blue" onClick={() => setColor("blue")}>
          Blue
        </button>

        <button className="green" onClick={() => setColor("green")}>
          Green
        </button>

        <button className="reset" onClick={() => setColor("white")}>
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;