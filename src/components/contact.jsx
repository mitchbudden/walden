import React, { Component } from "react";
import "../styles/global.css";
import biopic from "../images/biopic.png";

class Contact extends Component {
  render() {
    return (
      <div className="banner">
        <div className="image-desc-container">
          <img src={biopic} alt="Mitch Budden" />
          <h1 className="gallery-title">
            I'd love to talk to you. The methods below are how we can get in
            touch.
          </h1>
        </div>
      </div>
    );
  }
}