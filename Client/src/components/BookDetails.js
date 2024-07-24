import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetch(`/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
    
    fetch(`/reviews?book_id=${id}`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [id]);

  const handleAddReview = () => {
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, rating, book_id: id, user_id: 1 }) // Assuming user_id 1 for now
    })
      .then(response => response.json())
      .then(newReview => setReviews([...reviews, newReview]));
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.content} - {review.rating} stars</li>
        ))}
      </ul>
      <div>
        <h4>Add a Review</h4>
        <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button onClick={handleAddReview}>Add Review</button>
      </div>
    </div>
  );
}

export default BookDetails;
