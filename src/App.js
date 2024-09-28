import logo from './logo.svg';
import Hello from './Hello.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello></Hello>
        <p>
          Assignment#4-1: Ajax 구현 및 React기초
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          오픈소스 스튜디오
        </a>
      </header>
    </div>
  );
}

export default App;