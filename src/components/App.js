import React, { Component } from "react";
import Footer from "../layout/Footer";

import Header from "../layout/Header";
// import MainHead from '../layout/MainHead';
import Main from "./Main";

class App extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
