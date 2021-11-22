import React from "react";
import "./Intro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  DiGit,
  DiCss3,
  DiBootstrap,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiReact,
} from "react-icons/di";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__img">
        <img
          src="https://portfolio-1.sharmag44.repl.co/image/Shambhu.jpg"
          alt="mine_image"
          className="intro__size"
        />
      </div>
      <h1 className="intro__name">Shambhu Nath</h1>
      <h3 className="intro__title">I am Web Developer</h3>
      <div className="intro__icons">
        <DiHtml5 size="2em" color="#d84924" />
        <DiCss3 size="2em" color="blue" />
        <DiBootstrap size="2em" color="purple" />
        <DiGit size="2em" color="red" />
        <DiJavascript1 size="2em" color="yellow" />
        <DiNodejs size="5em" color="#54a245" />
        <DiReact size="2em" color="#61dafb" />
      </div>
    </div>
  );
}

export default Intro;
