HOOKS :
Hooks are functions that let us “hook into” state and lifecycle functionality in function components.

Hooks allow us to:

reuse stateful logic between components
simplify and organize our code to separate concerns, rather allowing unrelated data to get tangled up together
avoid confusion around the behavior of the this keyword
avoid class constructors, binding methods, and related advanced JavaScript techniques

Hooks are functions that let us “hook into” state and lifecycle functionality in function components.

Hooks allow us to:

reuse stateful logic between components
simplify and organize our code to separate concerns, rather allowing unrelated data to get tangled up together
avoid confusion around the behavior of the this keyword
avoid class constructors, binding methods, and related advanced JavaScript techniques.

The State Hook :

const [currentState, stateSetter] = useState(initialState);
The useState() Hook lets you add React state to function components. It should be called at the top level of a React function definition to manage its state.

initialState is an optional value that can be used to set the value of currentState for the first render. The stateSetter function is used to update the value of currentState and rerender our component with the next state value.

The Effect Hook :

import React, { useState, useEffect } from 'react';

function TitleCount() {
const [count, setCount] = useState(0);

useEffect(() => {
document.title = `You clicked ${count} times`;
});

return <button onClick={(prev) => setCount(prev + 1)}>+</button>;
}
After importing useEffect() from the 'react' library, we call this Hook at the top level of a React function definition to perform a side effect. The callback function that we pass as the first argument of useEffect() is where we write whatever JavaScript code that we’d like React to call after each render.

UseContext : useContext hook allows passing data to children elements without using redux.
Parent//

import React, { createContext } from ‘react’;
import ReactDOM from ‘react-dom’;
const MessageContext = createContext();
myApp=()=>{
return (
<MessageContext.Provider value=”hello”>
<div>
<Test/>
</div>
</MessageContext.Provider>
);
}

The createContext hooks gives us provider and consumer.

Provider is used to pass the values to child components and child components access the value using consumer.

Here we can use useContext to write it in a simple way.

Import { useContext } from ‘react’;
Test =()=>{
const messageValue=useContext(MessageContext);
return (
<div>Message: {messageValue} </div>
);
}

UseRef :

useRef instead of useState,both work is to store a state or a value and also update.

no rendering while using useREF.
