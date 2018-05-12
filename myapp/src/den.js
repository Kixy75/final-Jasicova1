import React, { Component } from 'react';

class Den extends Component {
 render() {
   let datum = new Date();
   return <div>{datum.toLocaleDateString()}</div>;
 }
}
export default Den;
