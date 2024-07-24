import React from 'react';
import './BookCard.css'; // Import the CSS file for styling

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image || 'https://via.placeholder.com/150'} alt={book.title} /> {/* Add an image */}
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
}

export default BookCard;
