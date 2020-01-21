import React from 'react';
import './App.css';
import Header from './Header'
import Circle from './Circle'
import Area1 from './Area1'
import Area2 from './Area2'
import Conect from './Conect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      
      </header>
      <nav>
        <ul>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
        </ul>
      </nav>
      <Area1 />
      <Area2 />
      <Conect />
    </div>
  );
}

export default App;
