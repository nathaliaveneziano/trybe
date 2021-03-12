import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Eventos
    this.handleClick01 = this.handleClick01.bind(this)
    this.handleClick02 = this.handleClick02.bind(this)
    this.handleClick03 = this.handleClick03.bind(this)

    // Estados
    this.state = {
      cliquesBotao01: 0,
      cliquesBotao02: 0,
      cliquesBotao03: 0,
    }
  }

  handleClick01() {
    this.setState(( estadoAnterior, _props ) => ({
      cliquesBotao01: estadoAnterior.cliquesBotao01 + 1
    }))
  }

  handleClick02() {
    this.setState(( estadoAnterior, _props ) => ({
      cliquesBotao02: estadoAnterior.cliquesBotao02 + 1
    }))
  }

  handleClick03() {
    this.setState(( estadoAnterior, _props ) => ({
      cliquesBotao03: estadoAnterior.cliquesBotao03 + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick01}>Botão 01 - {this.state.cliquesBotao01}</button>
        <button onClick={this.handleClick02}>Botão 02 - {this.state.cliquesBotao02}</button>
        <button onClick={this.handleClick03}>Botão 03 - {this.state.cliquesBotao03}</button>
      </div>
    );
  }
}

export default App;
