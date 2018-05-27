import React, { Component } from 'react';
import "./article.css";

class contact extends Component {
  render() {
      return (
        <div class="About">
          <h2>Contact ID</h2>
            <p>
          E-mail:kika.jasicova@gmail.com </p>
          <p>Tel:+421902101134</p>
          <p>Home: Rovná 16A Hlohovec</p>
          <div class="img1">
          <img src="supportcat.png" alt="Paris" >
          </img>
          </div>
          <form>
 <div class="emailBox">
   <p>Your email address</p>
   <input id="emailAddress" type="email" size="64" maxLength="64" required
          placeholder="username@beststartupever.com" pattern=".+@beststartupever.com"
          title="Please provide only a Best Startup Ever corporate email address"/>
 </div>

 <div class="messageBox">
  <p>Request</p>
   <textarea id="message" cols="80" rows="8" required
             placeholder="My shoes are too tight, and I have forgotten how to dance."></textarea>
 </div>
  <input type="submit" value="Send Request"/>
</form>
          </div>

      );
  }
}

export default contact;
