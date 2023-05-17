import './App.css';

let NOTES = {};
let r = require.context('./notes', false, /\.png$/);
  r.keys().forEach((item, img) => {
    NOTES[item.replace('./', '')] = r(item);
  });
let notes = Object.keys(NOTES);

function App() {

  let selected = notes[Math.floor(notes.length * Math.random())]
  console.log(selected)
  return (
    <div className="App">
      <header className="App-header">
        <h1>NoteLearner</h1>
        <img src={NOTES[selected]} alt="note"/>
      </header>
    </div>
  );
}

export default App;
