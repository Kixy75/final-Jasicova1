import React, { Component } from 'react';
import "./Blog.css";
import "./button.css";


class blog extends Component {
  render() {
      return (
        <div class="Blog">

          <h2>Zdravím Vás na mojom blogu.</h2>
          <h3> Tutorial s React </h3>

        <p>   Rozhodla som že sem hodím návod ako vytvoriť pwa pomocou reactu podľa predmetu IMPL1

            </p>



              <form action="/article1">
                <button type="link" class="btn btn:hover ">Časť 1.</button>
                </form>
                <form action="/article2">
                <button type="link" class="btn btn:hover ">Časť 2.</button>
                </form>
                



          </div>

      );
  }
}

export default blog;
