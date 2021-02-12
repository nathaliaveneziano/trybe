import React from "react";
import PropTypes from 'prop-types';

// Função com um parâmetro
function greetingParam(name) {
  return `Hello, ${name}`;
}  
console.log(greetingParam("Samuel"));

// Função com vários parâmetros
function greetingParams(name, lastName) {
  return `Hello, ${name} ${lastName}`;
}  
console.log(greetingParams("Samuel", "Silva"));

// Componente
class GreetingProps extends React.Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name} {this.props.lastName}.
      </h1>
    );
  }
}

GreetingProps.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string
}

export default GreetingProps;
