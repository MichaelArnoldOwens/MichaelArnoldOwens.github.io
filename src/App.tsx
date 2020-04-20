import React, { Component } from 'react';
import NavBar from 'components/NavBar';
import { HashRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <NavBar />
          <Route exact path="/" component={UnderConstruction} />
          <Route exact path="/about" component={UnderConstruction} />
          <Route exact path="/todo" component={UnderConstruction} />
        </div>
      </HashRouter>
    );
  }
}

function UnderConstruction() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Under Construction
        </p>
      </header>
     </div>
  );
}

export default App;
