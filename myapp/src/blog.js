import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";


class blog extends Component {
  render() {
      return (
        <div class="Blog">

          <h2>Môj blog</h2>
          <h3> Tutoriale </h3>
            <p>
          Zdravím Vás na mojom blogu. Rozhodla som že sem hodím ľahký návod ako vytvoriť webappku pomocou reactu podľa predmetu IMPL1

            </p>
            <p className="article1">
            </p>
              <p>  <Link to="/article1">
                Tutorial React časť 1.
                </Link></p>
              <p>  <Link to="/article2">
                Tutorial React časť 2.
                </Link></p>


          </div>
      );
  }
}

export default blog;
