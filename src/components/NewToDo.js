import React, { Component } from "react";
import axios from "axios";

export default class NewToDo extends Component {
  state = {
    title: "",
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;

    axios
      .post("http://localhost:4000/api/v1/todos", { title, body })
      .then(() => {
        // Refresh the list of todos
        this.props.refreshList();

        // Reset state
        this.setState({title: "", body: ""})
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>CREATE NEW TO-DO LIST</h1>

        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <label>Body:</label>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />

          <button type="submit">Create list</button>
        </form>
      </div>
    );
  }
}
