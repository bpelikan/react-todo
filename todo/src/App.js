import React, { Component } from 'react';
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      userName: "Adam",
      todoItems: [{ action: "Buy Flowers", done: false },
                  { action: "Get Shoes", done: false },
                  { action: "Collect Tickets", done: true },
                  { action: "Call Joe", done: false }],
      //newItemText: ""
    }
  }

  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === "Adam" ? "Bob" : "Adam"
  //   })
  // }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
        this.setState({ todoItems: [...this.state.todoItems, { action: task, done: false }] });
    }
  }
  
  toggleTodo = (todo) => this.setState({ 
    todoItems: this.state.todoItems.map(item => item.action === todo.action? { ...item, done: !item.done } : item) 
  });
  
  todoTableRows = () => this.state.todoItems.map((item, index) =>
    <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo } />
  
  // <tr key={ item.action }>
    //   <td>
    //     {index + 1 }. { item.action}
    //   </td>
    //   <td>
    //     <input type="checkbox" checked={ item.done } onChange={ () => this.toggleTodo(item) } />
    //   </td>
    // </tr> 
  );

  render = () =>
      <div>
        <TodoBanner name={ this.state.userName } tasks={this.state.todoItems } />
        {/* <h4 className="bg-primary text-white text-center p-2">
          { this.state.userName }'s To Do List ({ this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4> */}
        <div className="container-fluid">
          <TodoCreator callback={ this.createNewTodo } />
          {/* <div className="my-1">
            <input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue } />
            <button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>Add</button>
          </div> */}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>
                  Description
                </th>
                <th>
                    Done
                </th>
              </tr>
            </thead>
            <tbody>
              { this.todoTableRows() }
            </tbody>
          </table>
        </div>
      </div>
}
