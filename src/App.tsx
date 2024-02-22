import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent';

function App() {
  const [results, setResults] = useState([]);

  
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width={200} />
          <h1>Bing Search App</h1>
            <SearchComponent />
        </header>
      </div>
    </div>
  );
}

export default App;
