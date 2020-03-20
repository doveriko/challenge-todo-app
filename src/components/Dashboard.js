import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import NewToDo from "./NewToDo";
import AllToDo from "./AllToDo";

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
        <div>
          <NewToDo refreshList={this.getAllLists} />
        </div>
        <div>
          <AllToDo lists={lists} />
        </div>
      </div>
    );
  }
}

export default App;
