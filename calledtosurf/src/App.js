import React from "react";
import "./components/Global/Global.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div id="container">
        <Header />

        <div id="main">
          <BrowserRouter>
            <div>{routes}</div>
          </BrowserRouter>
        </div>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
