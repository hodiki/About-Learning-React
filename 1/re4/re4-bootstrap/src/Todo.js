import React, { Component } from "react";
import "./App.css";

import {} from "react-bootstrap";

class ListItem extends Component {
  render() {
    return (
      <li key={k}>
        <button className="remove" onClick={() => this._handleRemove(k)}>
          x
        </button>
        <span
          onClick={() => this._toggleComplete(k)}
          style={
            v.completed
              ? { textDecoration: "line-through", color: "green" }
              : {}
          }
        >
          {v.content}
        </span>
      </li>
    );
  }
}

export default class Todo extends Component {
  state = {
    todoList: [
      {
        completed: false,
        content: "要做的事情赶紧做!"
      },
      {
        completed: false,
        content: "不错就来不及了!"
      }
    ]
  };

  _handleRemove = index => {
    let todoList = this.state.todoList.slice();
    todoList.splice(index, 1);
    this.setState({
      todoList: todoList
    });
  };

  _handleAdd = index => {
    let todoList = this.state.todoList.slice();
    if (this.input && this.input.value.length > 0) {
      todoList.push({
        completed: false,
        content: this.input.value
      });
      this.input.value = "";
      this.setState({
        todoList: todoList
      });
    } else {
    }
  };

  _toggleComplete = index => {
    let todoList = this.state.todoList.slice();
    todoList[index].completed = !todoList[index].completed;
    this.setState({
      todoList: todoList
    });
  };

  render() {
    var { todoList } = this.state;
    return (
      <div className="container">
        <h3 className="title">TODO_LIST</h3>
        <ul>
          {todoList.map((v, k) => (
            <li key={k}>
              <button className="remove" onClick={() => this._handleRemove(k)}>
                x
              </button>
              <span
                onClick={() => this._toggleComplete(k)}
                style={
                  v.completed
                    ? { textDecoration: "line-through", color: "green" }
                    : {}
                }
              >
                {v.content}
              </span>
            </li>
          ))}
        </ul>
        <div className="add-warp">
          <input
            className="input"
            type="text"
            ref={node => {
              this.input = node;
            }}
          />
          <button className="add-button" onClick={() => this._handleAdd()}>
            +
          </button>
        </div>
      </div>
    );
  }
}
