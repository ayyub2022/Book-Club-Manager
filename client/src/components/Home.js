import React, { useEffect, useState } from "react";
import "./Home.css"; // Ensure you have this CSS file for general styling

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="home-book-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={book.image ? book.image : "https://i.stack.imgur.com/mwFzF.png"}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      {isHovered && (
        <div className="book-popup">
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Published:</strong> {book.published}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Language:</strong> {book.language}</p>
        </div>
      )}
    </div>
  );
};

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5555/book"); // Ensure the endpoint is correct
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch books");
        } else {
          setFeaturedBooks(data);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getBooks();
  }, []);

  const filteredBooks = featuredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2>Books You Might Like</h2>
      <div className="featured-books-slider">
        {featuredBooks.length > 0 ? (
          featuredBooks.map((book) => (
            <div className="featured-book-card" key={book.id}>
              <img
                src={book.image ? book.image : "https://i.stack.imgur.com/mwFzF.png"}
                alt={book.title}
              />
              <h4>{book.title}</h4>
              <p>{book.description}</p>
            </div>
          ))
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <input
        type="text"
        placeholder="Search for books..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="home-book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Home;
