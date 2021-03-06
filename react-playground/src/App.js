import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Persons from './components/Persons/Persons.js'
import ValidationComponent from './components/ValidationComponent/ValidationComponent.js';
import CharComponent from './components/CharComponent/CharComponent.js';
import Cockpit from './components/Cockpit/Cockpit.js'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
// import UserOutput from './UserOutput/UserOutput.js';
// import UserInput from './UserInput/UserInput.js';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {};
  // }


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
    ],
    txt: '',
    txtcount: 0 
  }

  static getDerivedStateFromProps(props, state){}

  componentDidMount(){}

  shouldComponentUpdate(nextProps, nextState){ return true } // performance improvements

  componentDidUpdate(){} // external requests

  txtChange = e => {
    this.setState({
      txt: e.target.value,
      txtcount: e.target.value.length 
    })
  
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

  nameChangedHandler = (e, id) => {
    const personIdx = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIdx]
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState({
      persons: persons
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

  removeChar = (idx) => {
    const chars = this.state.txt.split('');
    chars.splice(idx, 1);
    const updatedChars = chars.join('');
    this.setState({txt: updatedChars});
  }

  render() {
    
    // const inputStyle = {
    //   border: '10px solid red',
    // };

    // const outputStyle = {
    //   border: '10px solid green',
    // };

    let persons = null;
    if(this.state.showpersons){
      persons = (
        <div>
          <Persons persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler} />
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

    let removeCharVar = (
      <div>
        {this.state.txt.split('').map((char, idx) => {
            return <CharComponent 
              char={char}
              key={idx} 
              click={() => this.removeChar(idx)}/>
          })}
      </div> 
    );

    return (
      <div className="App">
        <Cockpit showpersons={this.state.showpersons} persons={this.state.persons}
          togglePersonsHandler={this.togglePersonsHandler} />
        {persons}
        <br></br><br></br>
        <input 
            type="text" 
            onChange={this.txtChange} 
            value={this.state.txt} />
        <p>Text Count: {this.state.txtcount}</p>
        <ValidationComponent textLength={this.state.txtcount}/>
        {removeCharVar}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //  React.createElement('h1', null, 'Hi, I/'m a React App) )
  }
}

export default Radium(App);
