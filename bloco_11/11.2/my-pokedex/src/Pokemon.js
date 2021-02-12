import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    // Recebe objeto
    // Validar dados com proptypes
    // Retorna: nome, tipo, peso + unidade de medida, imagem
    const poke = this.props.data;

    return (
      <div className="card">
        <div className="left">
          <p>{poke.name}</p>
          <p>{poke.type}</p>
          <p>Average Weight: {poke.averageWeight.value} {poke.averageWeight.measurementUnit}</p>
        </div>
        <div className="rigth">
          <img src={poke.image} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
