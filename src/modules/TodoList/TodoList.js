import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddForm";

class TodoList extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play football" },
    ],
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="small container">
        {/* <Todo onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}  */}
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
