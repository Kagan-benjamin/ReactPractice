import React, { Component } from 'react';
// import styled from 'styled-components';
import './Person.css';

// Functional React Component //

class Person extends Component{
 

    // const rnd = Math.random();
    // if(rnd > 0.7){                               Custom Error
    //     throw new Error('Something went wrong');
    // }
    render (){
        const style = {
            '@media (min-width: 500px)': {
                width: '450px'
            }
        };
    return (
        <div className="Person" style={style}>
        {/* styled.div`CSS GOES HERE` */}
            <p onClick={this.props.click}>Hi, I'm {this.props.name} and I am {this.props.age} years old.</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name} />
        </div>
    )
    }
};
export default Person;