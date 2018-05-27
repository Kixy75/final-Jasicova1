import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSVLink, CSVDownload} from 'react-csv';
import "./About.css";

class About extends Component {
  render() {

    const prettyLink  = {
     backgroundColor: '#8dc63f',
     fontSize: 14,
     fontWeight: 500,
     height: 52,
     padding: '0 48px',
     borderRadius: 5,
     color: '#fff'
   };
   const data = [
   ['firstnam', 'lastname', 'article'] ,
   ['Francesa', 'Zapia' , 'vymyslela'] ,
   ['David', 'Thoreau' , 'walden'] ,
   ['Maxim','Matkin', 'mexicka vlna']
 ];
      return (
          <div class="About">
          <h2>O mne</h2>

<p>
            Ahojte návštevníci, moje meno je Kika.</p>
            <p> Som študentkou druhého ročníka Ekonomickej univerzity odboru HI.</p>
            <div class="img2">
            <img src="octocat.gif" alt="Paris" >
            </img>
            </div>
          <p>  Momentálne som v druhom ročníku, poprí škole pracujem ako Techsupport a vo volnom čase sa venujem tvorbe dizajnu</p>
<p>Mám rada šport, malovanie/kreslenie a hru na hudobné nástroje.</p>
            <h3> Obľúbené prečítané knihy </h3>

            <CSVLink data={data}
  filename={"Moj-zoznam.csv"}
  className="btn btn-primary"
  target="_blank">
    Zoznam↓
</CSVLink>



          </div>
      );
  }
}

export default About;
