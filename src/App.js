import React, { useState } from 'react';
import './App.css';
import { RecoilRoot, useRecoilState, atom } from 'recoil'

const notesState = atom({
  key: 'noteState',
  default: []
})

export default function Main() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
}

function App() {

  const [notes, setNotes] = useRecoilState(notesState);
  const [input, setInput] = useState('')
  function createNote() {
    const notesArray = [...notes, input]
    setNotes(notesArray)
    setInput('')
  }
  return (
    <div className="App">
      <h1>My notes app</h1>
      <button onClick={createNote}>Create Note</button>
      <input value={input} onChange={e => setInput(e.target.value)} />
      { notes.map(note => <p key={note}>Note: {note}</p>) }
    </div>
  );
}

// export default App;
