import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./About.css";

class About extends Component {
  render() {
      return (
          <div class="About">
          <h2>About Me</h2>

<p>
            Ahoj, moje meno je Kika. Som študentkou druhého ročníka Ekonomickej univerzity. Mám 21 rokov.
            Som celkom pozitívne stvorenie, ktoré miluje šport, prírodu,umenie a všetko čo mu život dokáže poskytnúť.
            A dúfam že dám predmet IMPL1 :D
            </p>


          </div>
      );
  }
}

export default About;
