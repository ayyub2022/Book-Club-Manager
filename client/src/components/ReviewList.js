import React from 'react';
import './UserReviews.css'; // Import your CSS file for styling

function ReviewList({ reviews, onEdit, onDelete }) {
  return (
    <div className="review-list">
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.content}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
              <div className="review-actions">
                <button onClick={() => onEdit(review.id)}>Edit</button>
                <button onClick={() => onDelete(review.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-reviews">No reviews yet.</p>
      )}
    </div>
  );
}

export default ReviewList;
