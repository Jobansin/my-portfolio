import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
<Router>
  <div id="background">
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    <footer>© 2025 Joban Singh</footer>
  </div>
</Router>

  );
}

export default App;

