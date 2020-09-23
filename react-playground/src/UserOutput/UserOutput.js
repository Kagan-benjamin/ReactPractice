import React from 'react';
import './UserOutput.css';

const userOutput = props => {
    return (
        <div className="UserOutput">
            <span style={props.style}>
            <p>{props.username}</p>
            <p>{props.username}</p>
            </span>
        </div>
    )
};
export default userOutput;