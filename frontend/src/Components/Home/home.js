import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="back_img"> </div>

        <center>
          <h1>
            Music. <br /> For The People.By the People.With the People.{" "}
          </h1>
          <NavLink to="/channel/home">
            <button>Wavify </button>{" "}
          </NavLink>{" "}
        </center>
      </div>
    );
  }
}
