import React, { Component } from 'react';
import Person from './Person/Person.js';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state){
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        // true if render should continue, false otherwise
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){

    }

    componentDidUpdate(prevProps, prevState, snapshot){

    }

    componentWillUnmount

    render(){
        return (
            <div>
                {this.props.persons.map((person, idx) => {
                return (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        click={() => this.props.deletePersonHandler(idx)}
                        changed={(e) => this.props.nameChangedHandler(e, person.id)} />
                )
                })};
            </div>    
        )
    };
}
export default Persons;