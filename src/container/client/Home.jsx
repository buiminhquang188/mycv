import React, { Component } from "react";
import About from "./About/About";
import EduPro from "./EduPro/EduPro";
import Skills from "./Skills/Skills";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <About />
        <Skills />
        <EduPro />
      </div>
    );
  }
}
