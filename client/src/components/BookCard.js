import React, { useState } from 'react';
import './BookCard.css'; // Import the CSS file for styling

function BookCard({ book }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editReview, setEditReview] = useState('');

  // Handle adding a new review
  const addReview = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  // Handle editing an existing review
  const updateReview = () => {
    if (editReview.trim()) {
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = editReview;
      setReviews(updatedReviews);
      setEditIndex(-1);
      setEditReview('');
    }
  };

  // Handle deleting a review
  const deleteReview = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="book-card">
      <img
        src={book.image || 'https://via.placeholder.com/150'}
        alt={book.title}
        className="book-image"
      />
      {/* Add an image */}
      <h3>{book.title}</h3>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>

      <div className="review-section">
        <h4>Reviews</h4>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editReview}
                      onChange={(e) => setEditReview(e.target.value)}
                    />
                    <button onClick={updateReview}>Update</button>
                  </div>
                ) : (
                  <div>
                    <span>{review}</span>
                    <button onClick={() => setEditIndex(index) & setEditReview(review)}>Edit</button>
                    <button onClick={() => deleteReview(index)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
        <div className="review-form">
          <input
            type="text"
            placeholder="Add a review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button onClick={addReview}>Add Review</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

