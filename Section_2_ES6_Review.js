/*                          ES6 Review   
Let vs Const - 

.underlying JavaScript only knows 'var' but ES6 introduced let and const
Let:
-variable values, can be reassigned
Const:
-constant values, cannot be reassigned


Arrow Functions -

const myFunction = (name, age) => {
    console.log(name, age);
}
const multiply = num => num * 2;
.automatically sets binding of 'this' keyword and will keep context


Export and Imports - 

person.js: 
    const person = {
        name: 'Ben'
    }
    export default person;

utility.js:
    export const clean = () => {...};
    export const baseData = 10;

app.js:
    import person from './person.js';  (can pick your name) default export
    import {baseData, clean} from './utility.js' (name is set) named export
    import {clean as whatever} from './utility.js' aliased export


Javascript Classes -

class Human{
    constructor(){
        this.gender = 'male';
    }
}

class Person extends Human {
    constructor(name){
        super();
        this.name = name;    Property
    }
    call = () => {...}       Method
}

const myPerson = new Person();
myPerson.call();                  Usage
console.log(myPerson.name);

class Person extends Human       Inheritance


JS Classes, Properties and Methods -

.Properties are like variables attached to classes/objects
.Methods are like functions attached to classes/objects

ES6:
    constructor(val){
        this.val = val;
    }
ES7:
    val = 'value'


Spread and Rest Operators -

.Spread operator is used to split up array elements or obj properties
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newVal: 5}

.Rest operator is used to merge a list of function args into an array
function sortArgs(...args){
    return args.sort();
}

const nums = [1,2,3];
const newNums = [...nums, 4];

const person = { name: 'Ben' };
const newPerson = {
    ...person,
    age: 30
};


Destructuring -
.Enables easy extraction of array elements or object properties and
storing that data in variables.

Array Destructuring: [a,b] = ['Hello','Ben']
Object Destructuring: {name, age} = {name: 'Ben', age: 30}

const nums = [1,2,3];
[num1, num2] = nums;
console.log(num1, num2) //=> 1, 2
[num1, , num3] = nums;
console.log(num1, num3) //=> 1, 3


Reference and Primitive Types -
const num = 1;
const num1 = num;
--Primitive Type-- entire value is copied

const person = {
    name: 'Ben'
};
const secondPerson = person;
person.name = 'New Name';
--Referential Type-- variable only creates a pointer, not object copy

Fixed:
const secondPerson = {
    ...person
};


Array Functions -

const numbers = [1,2,3];
const doubleNums = numbers.map((num) => {
    return num * 2;
}


*/