
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [counter,setCount] = useState(0)
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button onClick={()=> setCount(coounter+1)}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
