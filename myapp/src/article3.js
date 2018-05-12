import React, { Component } from 'react';
import "./article.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'


class article3 extends Component {
  render() {
      return (

        <div class="article1">
          <h2>Webapp react časť 3. </h2>
            <p> Pokračujeme ďalej.</p>
            <p>1. Ak už máme všetky predchadzajúce kroky je dobré si tieot zmeny uložiť aj na githube</p>
            <p>Prejdeme do konzoli(čierna tabuľka) a zadáme  ctrl+c aby sme ukončili beh appky</p>
            <p>Pomocou príkazu git status vidime všetky zmeny ktoré sme spravili odposledného commitu</p>
            <p>Zadáme príkaz "git add ." ktorý nám všetky zmeny popridáva a následne "git commit -m "komentar </p>
            <p>Po commite zadáme ešte "git push" a môžme si skontrolovať na našom githube prieheb našej práce</p>
            <p>To by sme mali. Základná kostra progresivneho webappky je na svete</p>
            <p>Túto webappku si môžete následne meniť podľa vlastného uváženia, veľa dorbých tipov nájdete na:</p>

          <p> <a href="https://www.w3schools.com"> w3schools</a></p>
            <p><a href="https://www.npmjs.com/"> npmjs</a></p>
            <p><a href="https://engineering.musefind.com"> musefind </a></p>

            <div class="img">
            <img src="gitprof.png" alt="Paris" >
            </img>
            </div>
          </div>

      );
  }
}

export default article3;
