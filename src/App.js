import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import NewToDo from "./components/NewToDo";
import AllToDo from "./components/AllToDo";
import OneToDo from "./components/OneToDo";

class App extends Component {
  state = {
    lists: []
  };

  getAllLists = () => {
    axios
      .get("http://localhost:4000/api/v1/todos")
      .then(response => {
        const lists = response.data;
        this.setState({ lists: lists });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllLists();
  }

  render() {
    const lists = this.state.lists;

    return (
      <div className="App">

          <NewToDo refreshList={this.getAllLists} />
          <AllToDo lists={lists} />

        {/* <Switch>
          <Route exact path="/onelist" component={OneToDo} />
        </Switch> */}
      </div>
    );
  }
}

export default App;
