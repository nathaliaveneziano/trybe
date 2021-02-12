import React from 'react';
import Pokedex from "./Pokedex";
import data from "./data";
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <Pokedex pokemons={data} />
      </main>
    </div>
  );
}

export default App;
