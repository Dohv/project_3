import React, { Component } from 'react';

class SingleTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      inputTodoValue: this.props.todo.notes,
    }
    this.handleInputTodoChange = this.handleInputTodoChange.bind(this);
  }

  handleInputTodoChange(event) {
    //console.log(event.target.value);
    this.setState({inputTodoValue: event.target.value})
  }

  renderEditForm() {
    return (
      <li>
        <form className='add-todo-form' onSubmit={(event) => {
          this.props.handleTodoEdit(event);
          this.setState({isBeingEdited: false})
        }}
        >
        <input 
          type='text'
          value={this.state.inputTodoValue}
          name='todo'
          onChange={this.handleInputTodoChange}
        />
        <input type="submit" value="Update Todo!" />
         <input
            style={{visibility: 'hidden'}}
            readOnly
            name="id"
            value={this.props.todo.id}
          />
        </form>
        
      </li>
    );
  }

  renderTodo() {
    return (
      <li className="tweed">
        <button onClick={() => {this.props.handleTodoDelete(this.props.todo.id)}}>X</button>
        <p>{this.props.todo.todo_text}</p>
        <button onClick={() => {
          this.setState({isBeingEdited: true})
        }}>Edit Todo</button>
      </li>
    );
  }

  render() {
    if (this.state.isBeingEdited === false) {
      return this.renderTodo();
    } else {
      return this.renderEditForm();
    }
  }
}

export default SingleTodo;