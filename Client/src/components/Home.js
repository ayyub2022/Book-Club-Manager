import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="container">
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
