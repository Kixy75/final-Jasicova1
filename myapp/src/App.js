import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Link} from 'react-router-dom';
import "./About.css";
import "./people.js";


class App extends Component {
  render() {
      return (
          <div>
          <h2>Welcome to my blog</h2>
          <h3>This blog was made for subject IMPL1</h3>
            <p>
          I ll post there some tips later...
            </p>
          </div>
      );
  }
}

export default App;
