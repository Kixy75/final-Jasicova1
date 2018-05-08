import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";


class blog extends Component {
  render() {
      return (
        <div class="Blog">

          <h2>My blog</h2>
          <h3> You can find some stories here </h3>
            <p>
            Niečo tu bude potom ale teraz ma nič múdre nanapadá :D

            </p>
            <p className="article1">
            </p>
                <Link to="/Blog/article1">
                First article
                </Link>


          </div>
      );
  }
}

export default blog;
