import React, { Component } from 'react';
import SingleTodo from './SingleTodo';

class TodoList extends Component {
  render() {
    return (
      <ul className="todoList">
        {this.props.todos.map((todo) => {
          return (
            <SingleTodo 
            key={todo.id} 
            todo={todo} 
            handleTodoDelete={this.props.handleTodoDelete}
            handleTodoEdit={this.props.handleTodoEdit}
            />
          )
        })}
      </ul>
    );
  }
}

export default TodoList;