import React from 'react';
import './BookCard.css'; // Ensure you have this CSS file

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p>{book.description}</p>
    </div>
  );
}

export default BookCard;
