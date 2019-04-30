import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
state = {

todos: [
{
  id: 1,
  title: "task1",
  complete: false
},
{
  id: 2,
  title: "task2",
  complete: false
},
{
  id: 3,
  title: "task3",
  complete: false
}


]

}

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
     <Todos/>
      </div>
    );
  }
}

export default App;
