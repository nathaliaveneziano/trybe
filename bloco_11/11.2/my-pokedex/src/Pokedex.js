import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    // Recebe lista de pokemons
    // Exibe na tela
    // Para cada Pokedex, um Pokemon é chamando
    return (
      <div className="container-card">
        {this.props.pokemons.map((pokemon, index) => (
          <Pokemon key={index} data={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
