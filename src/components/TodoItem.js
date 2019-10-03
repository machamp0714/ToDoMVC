import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";

class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({
      editing: true
    });
  };

  handleSave = (id, text) => {
    if (text.length !== 0) {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    let element;
    const { todo, todoToggle, deleteTodo } = this.props;

    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          placeholder={todo.text}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => todoToggle(todo.id)}
          />
          <label
            onDoubleClick={this.handleDoubleClick}
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
          </label>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </div>
      );
    }

    return <li>{element}</li>;
  }
}

export default TodoItem;
