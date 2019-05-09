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
      <Header />
      <BrowserRouter>
        <div>{routes}</div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
