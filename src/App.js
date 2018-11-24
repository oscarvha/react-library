import React, { Component } from 'react';
import Header from "./components/header/Header";
import {loadGeneralResource} from "./actions/generalResourcesActions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header-wrapper">
          <Header/>
        </header>
      </div>
    );
  }
}

export default App;
