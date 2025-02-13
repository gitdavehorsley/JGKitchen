// src/App.js
import React from 'react';
import './App.css';
import RegisterPhoneNumber from './RegisterPhoneNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Specials Notification</h1>
        <RegisterPhoneNumber />
      </header>
    </div>
  );
}

export default App;
