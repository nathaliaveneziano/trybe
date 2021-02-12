// importando React
import React from "react";
// desestruturando a importação do React
import { Component } from "react";

class usandoJSX extends Component {
  render() {
    // Estrutura do React
    // const element = <h1>Hello, world!</h1>;

    // Estrutura acima em JavaScript, pouco utilizada
    // const element = React.createElement("h1", null, "Hello, world");

    // Incorporando expressões
    // const nome = "Jorge Maravilha";
    // const element = <h1>Hello, {nome}</h1>;

    // Chamando funções
    // function nomeCompleto(nome, sobrenome) {
    //   return `${nome} ${sobrenome}`;
    // }

    // const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

    // Encapsulando elemento
    // function helloWorld(nome, sobrenome) {
    //   return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
    // }

    // const element = <div>{helloWorld("Jorge", "Maravilha")}</div>;

    // Atribuindo atraibuto CLASS ao elemento
    const nome = "Jorge Maravilha";
    const classe = "hello-class";
    const element = <h1 className={classe}>Hello, {nome}</h1>;

    return element;
  }
}

// exportando a classe
export default usandoJSX;
