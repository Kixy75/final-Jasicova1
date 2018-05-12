import React, { Component } from 'react';
import "./article.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'



class article2 extends Component {
  render() {
      return (

        <div class="article1">
          <h2>Webapp react časť 2. </h2>
            <p> 1. Ak mne skončili v s klonovanim tak môžeme prejsť na tvorbu PWA, zadáme</p>
            <div class="articlepoz">
          <p>  npm install -g create-react-app</p>
          <p>create-react-app pwa-experiment</p>

    </div>
            <p>Potom</p>
            <div class="articlepoz">
            <p>cd pwa-experiment</p>
<p>npm install --save react-router@3.0.5</p>
</div>
<p>2. Do App.js skopírujte obsah ktorý je <a href="https://gist.githubusercontent.com/scottdomes/32246c815fa522580b7bfd8553eb66c9/raw/06d4cef79644cd7f408f247944117fc25b07d420/pwa-starter.js"> TU </a>
</p>
<p>Do konzoli napis príkaz</p>
  <div class="articlepoz">
<p>npm start</p>
</div>
<p>Gratulujem tvoj prvý PWA je na svete:)</p>
</div>
      );
  }
}

export default article2;
