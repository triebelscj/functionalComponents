import React from 'react'
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />
      <PersonCard firstName="Jane" lastName="Doe" age={17} hairColor="Black" />
      <PersonCard firstName="Some" lastName="User" age={62} hairColor="Blonde" />
    </div>
  );
}

export default App;
