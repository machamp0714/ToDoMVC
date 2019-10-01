import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class AddTodo extends Component {
  state = {
    text: ""
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(
  null,
  mapDispachToProps
)(AddTodo);
