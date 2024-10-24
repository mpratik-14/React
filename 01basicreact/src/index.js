import React from 'react'; //core foundation library to get all references
import ReactDOM from 'react-dom/client'; //implementation for website
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

