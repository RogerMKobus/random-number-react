import React, { useState } from 'react';
import './style.css';

export default function MainPage() {
  const [ randomNumber, setRandomNumber ] = useState(0);

  function generateNumber(){
    const newNumber = Math.floor(Math.random() * (100-1) +1);
    setRandomNumber(newNumber);
  }

  return(
    <div className="center">
        <h3>Random Number:</h3>
        <h1>{ randomNumber }</h1>
        
        <div className='button-area'>
          <label>
            Click in the button to genarate a random number:
          </label>
          
          <button onClick={ generateNumber }>
             Genarate Number
          </button>
        </div>
      </div>
  );
}

