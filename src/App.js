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
<<<<<<< HEAD
    // console.log("App.js: ", this.state.todos)
=======
    console.log(this.state.todos)
>>>>>>> a1f008d5eb74bb8b0437b7cab0439741b580f6d6
    return (
      <div className="App">
     <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
