/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Card(props) {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          aria-hidden
          src={props.image}
          alt="image caption"
        />
        <div className="card-body">
          <p className="card-title">
            <a href={props.title}>{props.link}</a>
          </p>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
