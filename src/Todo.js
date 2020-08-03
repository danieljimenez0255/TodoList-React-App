import React, { Component } from "react";
import "./Todo.css";
import Button from "react-bootstrap/Button";
import ins from "./you__gotThis.gif";
import gifTwo from "./you__canDoIt.gif";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { userTodos: [], userInput: "" };
    this.buttonTodo = this.buttonTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  inputChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  buttonTodo(e) {
    e.preventDefault();
    const updateList = this.state.userTodos.concat(this.state.userInput);
    this.setState({
      userTodos: updateList,
      userInput: "",
    });
  }

  deleteTodo(e, id) {
    e.preventDefault();
    // console.log(id);
    let updateList = [];
    for (let i = 0; i < this.state.userTodos.length; i++) {
      if (i !== id) {
        updateList.push(this.state.userTodos[i]);
      }
    }

    this.setState({
      userTodos: updateList,
    });
  }

  render() {
    return (
      <div className="todo__container">
        <div className="todo">
          <h1 className="app__title">
            Todo List App
            <img className src={this.props.todoPic} alt="" />
          </h1>
          <div className="todo__submitContainer">
            <input
              type="text"
              value={this.state.userInput}
              className="todo__input"
              onChange={this.inputChange}
            />

            <Button
              type="button"
              onClick={(e) => this.buttonTodo(e)}
              className="todo__submit"
              variant="danger"
              disabled={this.state.userInput === ""}
            >
              Add Todo
            </Button>
          </div>
          <div className="todo__itemsContainer">
            {this.state.userTodos.length === 0 ? (
              <h1>Add Todos Here</h1>
            ) : this.state.userTodos.length > 0 ? (
              this.state.userTodos.map((todos, i) => (
                <div key={i} className="todo__item">
                  <h1>{`#${i}: ${todos}`}</h1>

                  <Button
                    type="button"
                    className="todo__itemButton"
                    onClick={(e) => this.deleteTodo(e, i)}
                    variant="primary"
                  >
                    Delete Todo
                  </Button>
                </div>
              ))
            ) : (
              false
            )}
          </div>
        </div>
        {this.state.userTodos.length > 0 ? (
          <div className="todo__gifContainer">
            <img src={ins} alt="" />
            <img src={gifTwo} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
