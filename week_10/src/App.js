import React from 'react';
import './App.css';

function App() {
  const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "Inspirational" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe", category: "Life" },
    { text: "So many books, so little time.", author: "Frank Zappa", category: "Insparional" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero", category: "Soul" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch", category: "Life" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams", author: "Dr.Seuss", category: "Motivational" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quotes Gallery</h1>
      </header>
      <main>
        {quotes.map((quote, index) => (
          <div key={index} className="quote-box">
            <p className="quote-text">{quote.text}</p>
            <p className="quote-author">{quote.author}</p>
            <p className="quote-category">{quote.category}</p>
          </div>
        ))}
      </main>
      <footer className="App-footer">
        <p>©️ 2023 Aliyev Quotes</p>
      </footer>
    </div>
  );
}

export default App;