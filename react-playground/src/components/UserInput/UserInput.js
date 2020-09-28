import React from 'react';
import './UserInput.css';

const userInput = props => {
    return (
        <div className="UserInput">
            <span style={props.style}>
            <input type='text' onChange={props.testHandler} value={props.username} />
            </span>
        </div>
    )
};
export default userInput;