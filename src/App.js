import { useState } from 'react';
import './App.css';



function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <h1>Using useState</h1>
      <p>You Clicked {count} times</p>
      <button className='btn1' onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>decrement</button>
    </div>
  );
}

export default App;
