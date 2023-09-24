import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div style={{ backgroundColor: color }} className="hero">
        <h2>Background Changer</h2>
        <p>Default will be black</p>
        <div className="background_control">
          <button onClick={() => setColor("white")} className="button">
            White
          </button>
          <button onClick={() => setColor("pink")} className="button">
            Pink
          </button>
          <button onClick={() => setColor("green")} className="button">
            Green
          </button>
          <button onClick={() => setColor("grey")} className="button">
            Grey
          </button>
          <button onClick={() => setColor("red")} className="button">
            Red
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
