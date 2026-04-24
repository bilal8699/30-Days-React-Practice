import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <h1>👀 Toggle App</h1>

      <button
        className="toggle-btn"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {/* .content is always present – only the paragraph inside toggles */}
      <div className="content">
        {isVisible && (
          <p>
            🚀 This is a professional React toggle app.
            You can show and hide this text using state.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;