import React from 'react';
import logo from './logo.svg';
import './App.css';
import SVQRouter from './SVQRouter';
import Providers from './Providers';

function App() {
  return (
    <Providers>
      <SVQRouter />
    </Providers>
  );
}

export default App;
