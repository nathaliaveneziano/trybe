import { Component } from "react";
import ReactDOM from 'react-dom';

class ReactDomRender extends Component {
  render() {
    function tick() {
      const element = (
        <div>
          <h1 className="App">Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      ReactDOM.render(element, document.getElementById("root"));
    }

    setInterval(tick, 1000);

    return tick();
  }
}

// exportando a classe
export default ReactDomRender;
