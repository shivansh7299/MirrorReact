import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="small" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="small"> You have no todo left </p>
  );
  // state = {
  //   text: "",
  // };
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onSubmit({
  //     text: this.state.text,
  //     id: shortid.generate(),
  //   });
  //   this.setState({
  //     text: "",
  //   });
  // };

  // render() {
  return (
    <div>
      <p className="small">Todos :</p>

      {/* <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>New Todo</button>
        </form> */}
      {todoList}
    </div>
  );
  // }
};

export default Todos;
