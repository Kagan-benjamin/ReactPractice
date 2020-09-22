/*      Setting up a local React project:

.Use a dependency management tool (npm / yarn)
.Use a bundler for optimal file organization (webpack)
.Use a compiler that supports next-gen JS (babel + presets)
.Use a development server to test the front end locally 

Using Create-React App - 

Global Install -
1. npm requires Node.js, can install directly from website
2. npm install -g create-react-app

New Project -
1. create-react-app <your-app-here> ( --scripts-version 1.1.5 ) 
2. cd <your-app-here>/
3. npm start 

*/

/* Basic Component Notes

Components are the core building block of React apps. Actually, React 
really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - 
having one root component ("App") and then an potentially infinite amount 
of nested child components.

Each component needs to return/ render some JSX code - it defines which 
HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen 
when looking closely though (for example className in JSX vs class 
in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing 
you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

1. Functional components (also referred to as "presentational", "dumb" or 
"stateless" components - more about this later in the course) => 

const cmp = () => { return <div>some JSX</div> } 

2. Class-based components (also referred to as "containers", "smart" 
or "stateful" components) => 

class Cmp extends Component { render () { return <div>some JSX</div> } } 

*/