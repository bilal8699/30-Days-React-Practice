import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>🔥 Multiple Counter App</h1>
      <div className="counter-wrapper">
        <Counter title="Counter 1" />
        <Counter title="Counter 2" />
        <Counter title="Counter 3" />
      </div>
    </div>
  );
}

export default App;
