import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./article.css";


class article2 extends Component {
  render() {
      return (

        <div class="article1">
          <h2>Webapp react časť 1. </h2>
            <p> Povieme si tu krátky návod ako spraviť webappku pomocou reactu.</p>
            <p>V prvom rade potrebuejem...

            <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

            <img id="myImage" src="pic_bulboff.gif" style="width:100px"></img>

            <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

          </p>



          </div>
      );
  }
}

export default article2;
