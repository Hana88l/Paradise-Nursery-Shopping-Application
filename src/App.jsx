import { useState } from "react";

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="landing">
        <h1>Paradise Nursery</h1>

        <button onClick={() => setStarted(true)}>
          Get Started
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome to Paradise Nursery Shop</h2>
    </div>
  );
}

export default App;