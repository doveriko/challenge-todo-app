import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import OneToDo from "./components/OneToDo";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/:id" component={OneToDo} />
        </Switch>

      </div>
    );
  }
}

export default App;