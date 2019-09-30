import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    text: ""
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
