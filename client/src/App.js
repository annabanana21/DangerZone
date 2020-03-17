import React from 'react';
import logo from './logo.svg';
import './App.css';
import Silde from './components/Slide/Slide';
import Main from './pages/main'
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
