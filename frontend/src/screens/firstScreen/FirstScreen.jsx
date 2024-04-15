import React from "react";
import "./FirstScreen.css";
import Navbar from "../../components/navbar/Navbar";
// import Menu from "../../components/menu/Menu";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";

const FirstScreen = () => {
  return (
    <div className="first">
      <Navbar />
      <About />
      <Skills />
    </div>
  );
};

export default FirstScreen;
