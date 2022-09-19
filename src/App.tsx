import React from 'react';
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
