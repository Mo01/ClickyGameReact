import React, { Component } from 'react';


class Todos extends Component {

    render() {
        // console.log("Todos.js: ", this.props.todos)
        return this.props.todos.map((todo) => (
            <h1>{todo.title}</h1>
        ));
    }
}

export default Todos;
