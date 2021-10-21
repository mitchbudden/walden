import React, { Component } from "react";
import "../styles/global.css";
import "../styles/nav.css";
import articleList from "../articleList";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-description-container">
            <h1 className="banner-description">Decentralized Walden</h1>
            <div className="divider"></div>
            <div className="nav-outer">
              <div className="nav-group">
              <h2>Success Stories from a Post Apirational Society</h2>
              </div>
            </div>
          </div>
        </div>
        <articleList />
      </div>
    );
  }
}

export default Home;
