import React from "react";

// ***** Styles ***** //
import "./components/Global/Global.css";
import "./App.css";
// ***** Components ***** //
// import Login from "./components/UserAccess/Login/Login.js";
// import Shoes from "./components/Shoes/Shoes.js";
// import CreateAcct from "./components/UserAccess/CreateAcct/CreateAcct.js";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <nav className="nav">
            {/* <div className="link-wrap">
              <Link to="/createaccount" className="links">
                CreateAcct
              </Link>
            </div> */}
            {/* <div>
              <Link to="/login" className="links">
                Sigin
              </Link>
            </div> */}
          </nav>
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
