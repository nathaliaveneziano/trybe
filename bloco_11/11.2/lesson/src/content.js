// Via Função
/*
function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}

export default Greeting;
*/

// Via Classe
import React from "react";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}.</h1>;
  }
}

export default Greeting;
