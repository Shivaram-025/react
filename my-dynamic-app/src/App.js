/*
1. Use create-react-app to set up a new project. Edit the App.js file to include a stateful component with 
useState. Add an input field and a element that displays text based on the input. Dynamically update the 
content as the user types.

npx create-react-app my-dynamic-app
*/


import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Dynamic Text Display</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;