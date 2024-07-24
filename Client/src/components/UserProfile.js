import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/users/1') // Assuming user_id 1 for now
      .then(response => response.json())
      .then(data => setUser(data));
    
    fetch('/users/1/favorites') // Assuming user_id 1 for now
      .then(response => response.json())
      .then(data => setFavorites(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>{user.username}'s Profile</h2>
      <h3>Favorites</h3>
      <ul>
        {favorites.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
