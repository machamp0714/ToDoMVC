import React, { Component } from "react";

class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({
      editing: true
    });
  };

  handleSave = (e) => {
    if (e.which === 13) {
      const text = e.target.value;
      this.props.editTodo(this.props.id, text);

      this.setState({ editing: false });
    }
  };

  handleBlur = (e) => {
    const text = e.target.value;
    this.props.editTodo(this.props.id, text);
    this.setState({ editing: false });
  };

  handleClick = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    let element;
    const { id, text, completed, todoToggle } = this.props;

    if (this.state.editing) {
      element = (
        <input
          placeholder={text}
          onChange={this.handleChange}
          onKeyDown={this.handleSave}
          onBlur={this.handleBlur}
          type="text"
        />
      );
    } else {
      element = (
        <div>
          <input type="checkbox" onChange={() => todoToggle(id)} />
          <label
            onDoubleClick={this.handleDoubleClick}
            style={{
              textDecoration: completed ? "line-through" : "none"
            }}
          >
            {text}
          </label>
          <button onClick={this.handleClick}>削除</button>
        </div>
      );
    }

    return <li>{element}</li>;
  }
}

export default TodoItem;
