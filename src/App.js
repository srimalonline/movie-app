import { useState } from 'react';
import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: Fernando</h2>
    <h2>Age: 30</h2>
    </>
  )
}
const App = () =>{
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>
    </div>
  );
}

export default App;
