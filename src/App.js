import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards'

class App extends Component {
state = {

Cards: [
{
  id: 1,
  title: "./img/1.jpg",
  complete: false
},
{
  id: 2,
  title: "./img/2.jpg",
  complete: false
},
{
  id: 3,
  title: "./img/3.jpg",
  complete: false
},
{
  id: 4,
  title: "./img/4.jpg",
  complete: false
},
{
  id: 5,
  title: "./img/5.jpg",
  complete: false
},
{
  id: 6,
  title: "./img/6.jpg",
  complete: false
},
{
  id: 7,
  title: "./img/7.jpg",
  complete: false
},
{
  id: 8,
  title: "./img/8.jpg",
  complete: false
},
{
  id: 9,
  title: "./img/9.jpg",
  complete: false
},
{
  id: 10,
  title: "./img/10.jpg",
  complete: false
},
{
  id: 11,
  title: "./img/11.jpg",
  complete: false
},
{
  id: 12,
  title: "./img/12.jpg",
  complete: false
}



]

}


  render() {
    // console.log("App.js: ", this.state.Cards)
    // console.log(this.state.Cards)

    return (
      <div className="App">
     <Cards Cards={this.state.Cards} />
      </div>
    );
  }
}

export default App;
