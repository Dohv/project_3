import React, { Component } from 'react';
// import TodoHeader from './TodoHeadder';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

class TodoModle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputTodoValue: '',
    }
    this.handleInputTodoChange = this.handleInputTodoChange.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleTodoEdit = this.handleTodoEdit.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
  }

componentDidMount() {
    this.fetchAllTodos();
  }

   fetchAllTodos() {
    fetch('/api/todo')
      .then((res) => {
        return res.json()
      }).then((resJson) => {
        console.log(resJson.data.todos);
        this.setState({
          todos: resJson.data.todos,
        })
      });
  }

   handleInputTodoChange(event) {
    console.log(event);
    this.setState({inputTodoValue: event.target.value})
  }

  handleTodoSubmit(event) {
    event.preventDefault();
    console.log(event.target.notes.value)
    fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: event.target.notes.value,
      }),
    })
    .then((res) => {
      return res.json();
    }).then((jsonRes) => {
      this.setState((prevState) => {
        console.log(prevState.todos);
        return {
          todos: prevState.todos.concat(jsonRes.data.todo),
          inputTodoValue: '',
        }
      })
    })
  }

  handleTodoEdit(event) {
    event.preventDefault();

      fetch(`/api/todo/${event.target.id.value}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          todo: event.target.notes.value,
      }),
    })
    .then((res) => {
      if (res.status === 200) {
        this.fetchAllTodos();
      }
    })
  }

  handleTodoDelete(todoId) {
    fetch(`/api/todo/${todoId}`, {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.status === 200) {
        this.fetchAllTodos();
      }
    })
  }

  render() {
    return (
      <div className='todoModule'> 
        <AddTodoForm 
        handleTodoSubmit={this.handleTodoSubmit}
        handleInputTodoChange={this.handleInputTodoChange}
        inputTodoValue={this.state.inputTodoValue}
        />
        {/*<TodoHeader /> */}
        <TodoList 
        todos={this.state.todos}
        handleTodoDelete={this.handleTodoDelete}
        handleTodoEdit={this.handleTodoEdit}
        />
      </div>
    );
  }
}

export default TodoModle;