import React from 'react';
import { useState } from 'react';
import "./App.css";
function App() {
  const [count,setcount]=useState(0);
  const increasehelper=()=>{
    setcount(count+1);
  };
  const decreasehelper=()=>{
    setcount(count-1);
  };
  const resethelper=()=>{
    setcount(0);
  };
  return (
    <div>
      {count}
      <button onClick={increasehelper}> Increase </button>
      <button onClick={decreasehelper}> decrease </button>
      <button onClick={resethelper}> Reset to zero</button>
    </div>
  );
}

export default App
