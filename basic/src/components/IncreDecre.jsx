import React, { useState } from "react";

const IncreDecre = () => {
  const [counter, setCounter] = useState(10);

  function update() {
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
    setCounter(prevcounter=>prevcounter+1);
  }
  function downdate() {
    setCounter(counter - 1);

  if (counter < 1) {
    setCounter(0);
  }
}

  return (
    <div>
      <h2>Counter {counter}</h2>
      <button onClick={update} style={{ color: "black" }}>
        Update{" "}
      </button>
      <button onClick={downdate} style={{ color: "black" }}>
        Downdate{" "}
      </button>
    </div>
  );
};

export default IncreDecre;
