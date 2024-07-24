// src/components/Home.js

import React, { useEffect, useState } from 'react';
import BookCard from './BookCard'; // Import the BookCard component
import './Home.css'; // Ensure you have this CSS file for general styling

// Mock data for development
const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', description: 'A novel about racial injustice in the Deep South.' },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', description: 'A totalitarian regime uses surveillance to control its citizens.' },
  { id: 3, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The quest for vengeance against the white whale, Moby Dick.' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic novel of manners and marriage in 19th century England.' },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A tale of wealth, class, and the American Dream during the Jazz Age.' },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', description: 'An epic novel set against the backdrop of the Napoleonic Wars.' },
  { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.' },
  { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', description: 'A future society characterized by technological advancements and a loss of individuality.' },
  { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', description: 'A dystopian novel about a future where books are banned and burned.' },
  { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Gothic Romance', description: 'The story of an orphaned girl’s growth to adulthood and love.' },
  { id: 11, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'A fantasy adventure following Bilbo Baggins as he embarks on a quest.' },
  { id: 12, title: 'Lord of the Flies', author: 'William Golding', genre: 'Allegory', description: 'A group of boys stranded on an island descend into savagery.' },
  { id: 13, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', description: 'A satire on totalitarianism using a farm and its animals.' },
  { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', description: 'A young shepherd’s journey to discover his personal legend.' },
  { id: 15, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Thriller', description: 'A thriller involving religious secrets and codes.' },
  { id: 16, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Historical Romance', description: 'A story set during the American Civil War and Reconstruction era.' },
  { id: 17, title: 'The Shining', author: 'Stephen King', genre: 'Horror', description: 'A man’s mental unraveling while staying in a haunted hotel.' },
  { id: 18, title: 'Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'A satirical novel about the absurdities of war.' },
  { id: 19, title: 'Little Women', author: 'Louisa May Alcott', genre: 'Coming-of-Age', description: 'The lives and struggles of the four March sisters.' },
  { id: 20, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic Fiction', description: 'A tale of passion and revenge on the Yorkshire moors.' },
  { id: 21, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.' },
  { id: 22, title: 'The Road', author: 'Cormac McCarthy', genre: 'Post-Apocalyptic', description: 'A father and son journey through a desolate world.' },
  { id: 23, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', genre: 'Science Fiction', description: 'A soldier’s experience of time travel during World War II.' },
  { id: 24, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genre: 'Mystery', description: 'A journalist and hacker investigate a wealthy family’s dark secrets.' },
  { id: 25, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian', description: 'A competition where children fight to the death in a televised event.' },
  { id: 26, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A young nobleman becomes embroiled in a galactic struggle over a precious spice.' },
  { id: 27, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', description: 'A series of adventures set in a magical land of talking animals and mythical creatures.' },
  { id: 28, title: 'Ender’s Game', author: 'Orson Scott Card', genre: 'Science Fiction', description: 'A young boy is trained to be a military leader in a futuristic war.' },
  { id: 29, title: 'Life of Pi', author: 'Yann Martel', genre: 'Adventure', description: 'A boy survives a shipwreck and shares a lifeboat with a Bengal tiger.' },
  { id: 30, title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Historical Fiction', description: 'A story of friendship and redemption set in Afghanistan.' }
];

function Home() {
  return (
    <div className="container">
      <h2>Books</h2>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
