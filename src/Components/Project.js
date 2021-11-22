import React from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function Project() {
  return (
    <div className="project" id="project">
      <h2 className="project__title">Project</h2>
      <div className="project__card">
        <Card
          image="https://images.pexels.com/photos/99435/pexels-photo-99435.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="https://sharmag44.github.io/csb-7mwlk/"
          link="BMW Cars"
          text="Providing  every BMW Cars detail and Specifcation and its unique value"
        />
        <Card
          image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg"
          title="https://s3720.csb.app/"
          link="Movie Card"
          text="Info about a new Movies and there rating etc"
        />
        <Card
          image="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
          title="https://xiwm8.csb.app/"
          link="Weather App"
          text="Provide any location Weather Report like temp ,wind speed etc"
        />
      </div>
    </div>
  );
}

export default Project;
