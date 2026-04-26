import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (!trimmedName) return;
    setDisplayName(trimmedName);
    setName("");
  };

  return (
      <div className="page">
        <div className="card">
          <p className="title">Simple form</p>
          <p className="subtitle">Enter your name to continue</p>
          <hr className="divider" />
          <label className="label" htmlFor="nameInput">
            Your name
          </label>
          <input
            id="nameInput"
            className="input"
            type="text"
            placeholder="e.g. Ahmed Khan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="btn" onClick={handleSubmit}>
            Continue
          </button>
          {displayName && (
            <div className="result">
              Welcome back, <span>{displayName}</span>
            </div>
          )}
        </div>
      </div>
  );
}
