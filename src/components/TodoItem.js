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

  render() {
    let element;
    const { id, text, todoToggle, completed } = this.props;

    if (this.state.editing) {
      element = (
        <input
          placeholder={text}
          onChange={this.handleChange}
          onKeyDown={this.onSave}
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
          <button onClick={this.onSave}>削除</button>
        </div>
      );
    }

    return <li>{element}</li>;
  }
}

export default TodoItem;
