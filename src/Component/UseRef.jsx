import React, { useState, useRef } from "react";

export default function UseRef() {
  // const [state,setState] = useState("");
  const [name, setName] = useState("");
  // const handleChange=(e) => {
  // 	console.log(e.target.value);
  // 	setState(e.target.value);
  // }
  const state = useRef("");
  // const handleSubmit= (e)=> {
  // 	e.preventDefault();
  //      setName(state)
  // }
  console.log("render");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(state.current.value);
    setName(state.current.value);
  };
  return (
    <>
      {/* <form onChange={handleSubmit}>*/}
      <h1>USING USEREF</h1>
      <form onChange={handleForm}>
        <h1>{name} is a Lucky Name.</h1>
        Enter your name :<input id="name" type="text" ref={state} />
        {/* <input type='text' value={state}  onChange={handleChange}/>*/}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

//
