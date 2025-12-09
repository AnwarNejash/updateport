import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Expriences from "./components/pages/Experiences";
import Skill from "./components/pages/Skill";
import Project from "./components/pages/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expriences" element={<Expriences />} />
        <Route path="/projects" element={<Project />} />
         <Route path="/Skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;