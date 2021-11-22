import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DiGithubBadge } from "react-icons/di";
import { FaTwitterSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="Contact__icon">
        <DiGithubBadge
          href="//:github.com/sharmag44"
          size="2.5em"
          colors="success"
        />

        <FaTwitterSquare
          href="https://twitter.com/Rohan_sharma44"
          size="2em"
          color="light"
        />

        <SiGmail href="mailto:shambhun506@gmail.com" size="1.5em" />
      </div>
      <div className="Contact__place">
        <address style={{textAlign:"center"}}>
          Created by <a href="mailto:shambhun506@gmail.com">Shambhu Nath</a>.
          <br />
          Hometown:
          <br />
          Rajol Kangra ,Himachal Pradesh
          <br />
          India
        </address>
      </div>
    </div>
  );
}

export default Contact;
