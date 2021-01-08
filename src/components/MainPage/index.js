import React from 'react';
import './style.css';

export default function MainPage() {
  return(
    <div className="center">
        <h3>Random Number:</h3>
        <h1>0</h1>
        
        <div className='button-area'>
          <label>
            Click in the button to genarate a random number:
          </label>
          
          <button>
             Genarate Number
          </button>
        </div>
      </div>
  );
}

