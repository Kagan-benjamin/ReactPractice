import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Ben', age: 30 },
      { name: 'Layla', age: 32 }
    ]
  }

  switchNameHandler = e => {
    console.log('Button was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Extra Text as children </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I/'m a React App) )
  }
}

export default App;
