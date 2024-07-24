import React from 'react';

function BookClub({ club }) {
  return (
    <div className="book-club">
      <h3>{club.name}</h3>
      <p>{club.description}</p>
    </div>
  );
}

export default BookClub;
