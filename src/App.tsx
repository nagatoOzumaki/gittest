import React from 'react';
import './App.css';

function App() {
  const obj = {
    name: 'riad',
  };

  console.log(3);
  return (
    <div className="App">
      <header className="App-header">
        <small>{obj?.name}</small>
        <small>Hello</small>
      </header>
    </div>
  );
}

export default App;
