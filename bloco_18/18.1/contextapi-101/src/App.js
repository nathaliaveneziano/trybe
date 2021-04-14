import logo from './logo.svg';
import './App.css';
import GreatGrandfather from './GreatGrandfather';
import SpendGreatGrandfather from './SpendGreatGrandfather';
import MyComponent from './ContextApi/MyComponent';
import RenderPropsGreatGrandfather from './RenderProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GreatGrandfather />
      <SpendGreatGrandfather />
      <MyComponent />
      <RenderPropsGreatGrandfather />
    </div>
  );
}

export default App;
