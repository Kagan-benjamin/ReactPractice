import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Ben', age: 30 },
      { name: 'Layla', age: 32 }
    ],
    full: false,
    showpersons: false,
    usernames: [
      'Test 1',
      'Test 2'
    ]
  }

  testHandler = e => {
    this.setState({
      usernames: [
        e.target.value
      ]
    })
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

  togglePersonsHandler = () => {
    this.setState({ showpersons: !this.state.showpersons})
  }

  render() {
    const style = {
      backgroundColor: 'baby blue',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer'
    };

    const inputStyle = {
      border: '10px solid red',
    };

    const outputStyle = {
      border: '10px solid green',
    };

    let persons = null;
    if(this.state.showpersons){
      persons = (
        <div>
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
        <UserInput 
          style={inputStyle}
          testHandler={this.testHandler} 
          username={this.state.usernames[0]} />
        <UserOutput 
          style={outputStyle}
          username={this.state.usernames[0]}/>
        <UserOutput
          style={outputStyle} 
          username={this.state.usernames[0]}/>
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I/'m a React App) )
  }
}

export default App;
