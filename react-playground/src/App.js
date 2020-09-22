import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name='Ben' age='30'> Extra Text </Person>
        <Person name='Layla' age='32'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I/'m a React App) )
  }
}

export default App;
