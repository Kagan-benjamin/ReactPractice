import React from 'react';
import Person from './Person/Person.js';

const persons = (props) => {
    return (
        <div>
        {props.persons.map((person, idx) => {
            return (
              <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(idx)}
              changed={(e) => this.nameChangedHandler(e, person.id)} />
            )
          })};
        </div>    
    )
}
export default persons;