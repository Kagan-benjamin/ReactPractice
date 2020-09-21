// HTML //

<div id='app'></div>

<div class='person'>
    <h1>Ben</h1>
    <p>Your Age: 30</p>
</div>

// CSS //

.person {
    display: inline-block;
    margin: 10px;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
}

// JavaScript //
// .import React and ReactDOM
// .javascript preprocessor = Babel

// Functional Component //

function Person(props){
    return(
        <div class='person'>
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name='Ben' age='30'/>
    </div>
);

ReactDOM.render(app,
    document.querySelector('#app'));