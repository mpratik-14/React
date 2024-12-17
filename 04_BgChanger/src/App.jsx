import React from 'react';
import './App.css';

const App = () => {
  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
      <div>
        <h1>Change Background Color</h1>
        <div>
          <button
            onClick={() => changeBackgroundColor('red')}
          >
            Red
          </button>
          <button
            onClick={() => changeBackgroundColor('green')}
          >
            Green
          </button>
          <button
            onClick={() => changeBackgroundColor('blue')}
          >
            Blue
          </button>
          <button
            onClick={() => changeBackgroundColor('white')}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
