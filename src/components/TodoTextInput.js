import React, { Component } from "react";

class TodoTextInput extends Component {
  state = {
    text: this.props.text || ""
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleBlur = () => {
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text);
    }
  };

  handleSave = (e) => {
    if (e.which === 13) {
      this.props.onSave(this.state.text);
      if (this.props.newTodo) {
        this.setState({ text: "" });
      }
    }
  };

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        onKeyDown={this.handleSave}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        value={this.state.text}
      />
    );
  }
}

export default TodoTextInput;
