import React from 'react';
import Radium from 'radium';

const cockpit = props => {

    let style;
    if(!props.showpersons){
      style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid white',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };
    } else {
      style = {
        backgroundColor: 'darkred',
        color: 'white',
        font: 'inherit',
        border: '1px solid white',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'red',
          color: 'white'
        }
      };
    }

    return(
        <div>
            <h1>Hi, I'm a React App</h1>
            <button
                style={style} 
                onClick={props.togglePersonsHandler}>Switch Name</button>
        </div>
    );
}
export default Radium(cockpit);