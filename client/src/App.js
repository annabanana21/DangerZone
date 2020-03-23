import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GameController from './controller/GameController';

function App() {
  return (
    <div>
      <Header />
      <GameController />
    </div>
  );
}

export default App;
