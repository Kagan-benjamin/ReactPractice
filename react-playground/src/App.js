import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Ben', age: 30 },
      { id: 2, name: 'Layla', age: 32 }
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

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((person, idx) => {
            return <Person 
              name={person.name} 
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(idx)}
              changed={this.nameChangedHandler} />
          })}
          {/* <UserInput 
            style={inputStyle}
            testHandler={this.testHandler} 
            username={this.state.usernames[0]} />
          <UserOutput 
            style={outputStyle}
            username={this.state.usernames[0]}/>
          <UserOutput
            style={outputStyle} 
            username={this.state.usernames[0]}/> */}
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
