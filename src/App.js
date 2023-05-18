import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

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
          <Button type="button" className="btn btn-primary noteBtn" id="a" onClick={checkAnswer}>A</Button> 
          <Button type="button" className="btn btn-primary noteBtn" id="b" onClick={checkAnswer}>B</Button>
          <Button type="button" className="btn btn-primary noteBtn" id="c" onClick={checkAnswer}>C</Button>
          <Button type="button" className="btn btn-primary noteBtn" id="d" onClick={checkAnswer}>D</Button>
          <Button type="button" className="btn btn-primary noteBtn" id="e" onClick={checkAnswer}>E</Button>
          <Button type="button" className="btn btn-primary noteBtn" id="f" onClick={checkAnswer}>F</Button>
          <Button type="button" className="btn btn-primary noteBtn" id="g" onClick={checkAnswer}>G</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
