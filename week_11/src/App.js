import React from 'react';
import Note from './Note.js';
import notes from './notes';

function App() {
  return (
    <div>
      <header>Your Header</header>
      <main>
        {notes.map(note => <Note key={note.id} {...note} />)}
      </main>
      <footer>Your Footer</footer>
    </div>
  );
}

export default App;