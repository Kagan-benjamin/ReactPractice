import React from 'react';

const validationComponent = props => {
    let response = '';
    if(props.textLength < 4){
        response = "Text too short"
    } else {
        response = "Text long enough"
    }
    
    return (
        <div>
            <p>
                {response}
            </p>
        </div>
    )
}
export default validationComponent;