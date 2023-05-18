import './App.css';
import { useState } from 'react';

let NOTES = {};
let r = require.context('./notes', false, /\.png$/);
  r.keys().forEach((item, img) => {
    NOTES[item.replace('./', '')] = r(item);
  });
let notes = Object.keys(NOTES);

function getNote() {
  return notes[Math.floor(notes.length * Math.random())];
}

function App() {
  const [note, setNote] = useState(getNote);
  const checkAnswer = (evt) => {
    if (evt.target.id === note[0])
    {
      setNote(getNote);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteLearner</h1>
        <img src={NOTES[note]} alt="note"/>
        <div>
          <button id="a" onClick={checkAnswer}>A</button>
          <button id="b" onClick={checkAnswer}>B</button>
          <button id="c" onClick={checkAnswer}>C</button>
          <button id="d" onClick={checkAnswer}>D</button>
          <button id="e" onClick={checkAnswer}>E</button>
          <button id="f" onClick={checkAnswer}>F</button>
          <button id="g" onClick={checkAnswer}>G</button>
        </div>
      </header>
    </div>
  );
}

export default App;
