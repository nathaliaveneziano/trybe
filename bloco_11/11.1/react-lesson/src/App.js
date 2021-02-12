// importando React
import React from "react";

import logo from "./logo.svg";
import "./App.css";

// importando um js ou jsx
import UsandoJSX from "./usando_jsx";
import ReactDomRender from "./reactdom_render";


const estouAprendendo = (conteudo) => {
  return (<h2>Estou aprendendo {conteudo}</h2>);
}

// criando uma classe
class App extends React.Component {
  render() {
    return (
      <div>
        {/* importando conteúdo de outro js ou jsx */}
        <UsandoJSX />
        {estouAprendendo('React')}
        <p>Este é meu primeiro App React!</p>
        <ReactDomRender />
      </div>
    );
  }
}

export default App;
