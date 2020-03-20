import React, { Component } from "react";
import axios from "axios";

export default class OneToDo extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    this.getSingleList();
  }

  getSingleList = () => {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:4000/api/v1/todos/${id}`)
      .then(list => {
        const oneList = list.data;
        this.setState(oneList);
      })
      .catch(err => console.log(err));
  };

  deleteList = () => {
    const { id } = this.props.match.params;

    axios
    .delete(`http://localhost:4000/api/v1/todos/${id}`)
    .then(() => {
      this.props.history.push("/")
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>
        <button onClick={ () => this.deleteList()}>Delete list</button>
      </div>
    );
  }
}
