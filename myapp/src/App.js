import React, { Component } from "react";
import "./App.css";
import ReactPlayer from 'react-player'
import "./About.css";
import "./people.js";
import "./videjko.css";


class App extends Component {
  render() {
      return (
        <div class="App">
          <h2>Vítajte na mojom blogu</h2>
          <h3>Tento blog bol vytvorený na predmet IMPL1</h3>
        <p>
          Je stále vo forme vývoja, zatiaľ tu môžete nájsť návod v sekcí blog.
          <div className="player-wrapper">
          <p>
          <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=7PClJma9Q8U'
          width='20%'
          height='20%'
        />
          </p></div>
         </p>
          </div>
      );
  }
}

export default App;
