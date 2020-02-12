import React, { Component } from 'react';
import { sortBy } from 'lodash';
import './App.css';
import ToDOItem from './ToDoList/ToDoItem';
import todosData from './todosData';
import { render } from 'react-dom';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todoItems: todosData
    }
    // this.handleChange = this.handleChange.bind(this);

  }

   handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
      let {todoItems} = state;
      todoItems[index].completed = true;
      return todoItems;
    })
  }

  render(){
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.completed === false);
    const completedTasks = todoItems.filter(task => task.completed === true);
    const finalTasks = [...activeTasks, ...completedTasks].map(item => {
      return(
        <ToDOItem 
        key={item.id}
        descripton={item.descripton}
        completed={item.completed}
        handleChange={()=> {this.handleChange(item.id)}}
        />
      )
    })

    
    
    return(
      <div className="App">
        {finalTasks}
      </div>
    );
  }
  
}
export default App;