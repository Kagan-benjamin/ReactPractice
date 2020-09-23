import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Ben', age: 30 },
      { name: 'Layla', age: 32 }
    ],
    full: false
  }

  switchNameHandler = e => {
    if (!this.state.full){
      this.setState({
        persons: [...this.state.persons,
          { name: 'Tanner', age: 32 },
          { name: 'Katie', age: 33 },
        ],
        full: true
      });
    } 
    this.state.persons.forEach(person => {
      console.log(person.name, person.age)
    });
  }

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: e.target.value, age: 100 },
        { name: e.target.value, age: 100 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'baby blue',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style} 
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I/'m a React App) )
  }
}

export default App;
