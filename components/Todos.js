import React, { Component } from 'react'
import TodoItems from './TodoItem'

class Todos extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)
    this.markDone = this.markDone.bind(this)

    this.state = {
      newTodo: '',
      todos: []
    }
  }

  typing(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  enter(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      let updatedTodos = this.state.todos

      updatedTodos.push({
        text: e.target.value,
        done: false
      })

      this.setState({
        newTodo: '',
        todos: updatedTodos
      })
    }
  }

  markDone(currentTodoIndex) {
    var updatedTodos = this.state.todos

    updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done



    this.setState({
      todos: updatedTodos
    })
  }

  render() {
    var todoListOfComponents = this.state.todos.map((todoItems, todoItemIndex) => {
        return <TodoItems item={todoItems} key={todoItemIndex} markDone={() => this.markDone(todoItemIndex)} />
    })

    return <div>
      <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter} /><button className="btn btn-success">Add Todo!</button><br />
      <ul className="list-group">
        {todoListOfComponents}
      </ul>
    </div>
  }
}

export default Todos
