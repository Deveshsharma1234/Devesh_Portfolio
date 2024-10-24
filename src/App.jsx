import { Component, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
      </div>
      Hy this is App.jsx
    </>
  );
}

export default App;
