import React from 'react';

// ***** Styles ***** //
import './components/Global/Global.css';
import './App.css';
// ***** Components ***** //
import Login from './components/UserAccess/Login/Login.js';



function App() {
  return (
    <section className="App">
      <section>
        Home Page
        <Login />
      </section>
    </section>
  );
}

export default App;
