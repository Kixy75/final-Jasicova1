import React, { Component } from 'react';
import "./article.css";



class article1 extends Component {
  render() {


      return (

        <div class="article1">
          <h2>Webapp react časť 1. </h2>
            <p> Povieme si tu krátky návod ako spraviť webappku pomocou reactu.</p>
            <p>1. V prvom rade si potrebujeme založiť účet na githube a tam vytvoriť nový repozitár.</p>
            <p>Stiahneme si text editor v ktorom bude písať našu appku odporúčam atom ktorý nájdete</p>
            <p> <a href="https://atom.io/"> TU </a></p>
            <p>2. Použiejem skratku windows+r a napíšeme "cmd" otvorí sa nám commander ktorý nám ukazuje práve na akej ceste sa nachádzame. </p>
            <p>Vytvoríme si pričinok pomocou príkazu "mkrdir" a zadáme meno napr. appka, použijem príkaz cd appka a dostanem sa to adresáru. </p>
            <p>3. Prejdem nazad na github kde mám svoj vytvorený repozitár kliknem na tlačidlo "clone or download" a skopirujem.</p>
          <p>  Následne prejdem do Commaderu (čierna tabulka) zadam "git clone" a vložím odkaz ktorý sme si skopírovali.
      </p>
      <p>4. Následne môžeme prejsť k samotnej tvorbe PWA, zadáme nasledovné: </p>
        <div class="articlepoz">
        <img src="instal.jpg" alt="Paris" width="1px" height="2px">
        </img>
      <p>  "npm install -g create-react-app"</p>
      <p>"create-react-app pwa-experiment"</p>
</div>


          </div>
      );
  }
}

export default article1;
