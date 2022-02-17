import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
<p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
 
 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>
        <div className="btn btn-secondary">Test</div>
        <a className="btn btn-primary"
             data-bs-toggle="collapse"
             href="#collapseExample"
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample">
        Bootstrap button
        </a>
    </header>
    </div>
  );
}

export default App
