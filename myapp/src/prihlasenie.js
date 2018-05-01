import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class prihlasenie extends Component {
 componentWillMount() {
   let loggedIn = window.localStorage.getItem("login");
   console.log(loggedIn);
   this.setState({ user: loggedIn });
 }
 doLogin() {
   this.setState({ user: this.login });
   window.localStorage.setItem("login", this.login);
 }
 doLogout() {
   this.setState({ user: "" });
   window.localStorage.setItem("login", this.login);
 }
 showLoginForm() {
   if (this.state.user == "")
     return (
       <form>
         Login{" "}
         <input
           type="text"
           id="login"
           onChange={evt => {
             this.login = evt.currentTarget.value;
           }}
         />
         <br />
         Password{" "}
         <input
           type="password"
           onChange={evt => {
             this.password = evt.currentTarget.value;
           }}
         />
         <br />
         <button onClick={() => this.doLogin()}>Login</button>
       </form>
     );
   else
     return (
       <div>
         <p>Prihlaseny je  {this.state.user}
         <button onClick={() => this.doLogout()}>Log out</button></p>
       </div>
     );
 }
 render() {
   return <div className="prihlasenie">{this.showLoginForm()}
                </div>;
 }
}
export default prihlasenie;
