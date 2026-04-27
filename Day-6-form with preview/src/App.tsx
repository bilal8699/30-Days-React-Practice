import { useState } from "react";
import type { ChangeEvent } from "react";

function App() {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Live Preview Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default App;