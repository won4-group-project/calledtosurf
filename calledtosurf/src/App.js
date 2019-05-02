import React from 'react';

// ***** Styles ***** //
import './components/Global/Global.css';
import './App.css';
// ***** Components ***** //
import Login from './components/UserAccess/Login/Login.js';
import Shoes from './components/Shoes/Shoes.js';
import CreateAcct from './components/UserAccess/CreateAcct/CreateAcct.js';



function App() {
  return (
    <section className="App">
      <section>
        Home Page
        {/* <Login /> */}
        <CreateAcct />
      </section>
    </section>
  );
}

export default App;
