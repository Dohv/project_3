import React, { Component } from 'react';

class AddTodoForm extends Component {
  render() {
    return (
      <form
        className="add-todo-form"
        onSubmit={this.props.handleTodoSubmit}
      >
        <input
          type="text"
          value={this.props.inputTodoValue}
          name="notes"
          placeholder="New Todo"
          onChange={this.props.handleInputTodoChange}
        />
        <button type='submit'>Todo it!</button>
      </form>
    );
  }
}

export default AddTodoForm;