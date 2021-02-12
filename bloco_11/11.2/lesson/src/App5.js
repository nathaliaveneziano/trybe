import React from "react";

class App5 extends React.Component {
  render() {
    const shoppingList = ["leite", "arroz", "feijão", "banana", "carne"];
    const items = shoppingList.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default App5;
