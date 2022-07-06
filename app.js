import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  
  useEffect(() => {
    let id;
    if (!isPaused) {
      id = setInterval(() => {
        setCounter(prevState => prevState + 1);
      }, 1000);
    }
    return () => {
      if (id) clearInterval(id);
    };
  }, [isPaused]);

  return (
    <div className="App">
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Pause"}
      </button>
      <br />
      {counter}
      <br />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
