import React from 'react';
import BookClub from './BookClub';

function Dashboard() {
  // Sample data
  const bookClubs = [
    { id: 1, name: 'Sci-Fi Lovers', description: 'A club for sci-fi enthusiasts' },
    { id: 2, name: 'Historical Fiction Fans', description: 'Discuss historical fiction books' },
  ];

  return (
    <div className="container dashboard">
      <h2>Dashboard</h2>
      {bookClubs.map((club) => (
        <BookClub key={club.id} club={club} />
      ))}
    </div>
  );
}

export default Dashboard;
