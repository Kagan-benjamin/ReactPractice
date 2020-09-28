import React from 'react';
// import styled from 'styled-components';
import './Person.css';

// Functional React Component //

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    // const rnd = Math.random();
    // if(rnd > 0.7){                               Custom Error
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className="Person" style={style}>
        {/* styled.div`CSS GOES HERE` */}
            <p onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
};
export default person;