/* import logo from './logo.svg'; */
import './App.css';
import News from './news';
import Photo from './photos/news.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Photo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <News />
      </header>
    </div>
  );
}

export default App;
