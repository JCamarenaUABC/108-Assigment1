import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className="container">
        <Catalog></Catalog>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
