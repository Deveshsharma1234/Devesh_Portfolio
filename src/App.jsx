import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
      Hy this is App.jsx
    </>
  );
}

export default App;
