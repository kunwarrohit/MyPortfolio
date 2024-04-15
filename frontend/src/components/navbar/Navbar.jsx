import React from "react";
// import NavbarCss from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <a href="#top" className="mar">
          <span className="title">About</span>
        </a>
        <a href="#top" className="mar">
          <span className="title">Skills</span>
        </a>
        <a href="#top" className="mar">
          <span className="title">Experience</span>
        </a>
        <a href="#top" className="mar">
          <span className="title">Projects</span>
        </a>
        <a href="#top" className="mar">
          <span className="title">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
