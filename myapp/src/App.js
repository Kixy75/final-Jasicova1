import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player'
import "./About.css";
import "./people.js";


class App extends Component {
  render() {
      return (
        <div class="App">
          <h2>Welcome to my blog</h2>
          <h3>This blog was made for subject IMPL1</h3>
        <p>
          I ll post there some tips later...
          <div class="videjko">
          <p>
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
          </p></div>
         </p>
          </div>
      );
  }
}

export default App;
