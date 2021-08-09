import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { HashRouter, Redirect, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <div class="container mx-auto px-4">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Route path="/" exact component={Counter} />
          </header>
        </div>
      </Switch>
    </HashRouter>
  );
}

export default App;
