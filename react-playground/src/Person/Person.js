import React from 'react';

// Functional React Component //

const person = (props) => {
    return (
        <div>
            <p>Hi, I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
};
export default person;