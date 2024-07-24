import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const sampleBooks = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', description: 'A novel about racial injustice in the Deep South.', image: '/images/to-kill-a-mockingbird.jpg', rating: 4.8, popularity: 90 },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', description: 'A totalitarian regime uses surveillance to control its citizens.', image: '/images/1984.jpg', rating: 4.6, popularity: 85 },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic novel of manners and social criticism.', image: '/images/pride-and-prejudice.jpg', rating: 4.9, popularity: 88 },
    { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A story of the young and mysterious millionaire Jay Gatsby.', image: '/images/the-great-gatsby.jpg', rating: 4.7, popularity: 87 },
    { id: 5, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The voyage of the whaling ship Pequod.', image: '/images/moby-dick.jpg', rating: 4.5, popularity: 80 },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical', description: 'A novel that chronicles the history of the French invasion of Russia.', image: '/images/war-and-peace.jpg', rating: 4.4, popularity: 75 },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'The story of Holden Caulfield, a teenager from New York City.', image: '/images/the-catcher-in-the-rye.jpg', rating: 4.6, popularity: 82 },
    { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'The journey of Bilbo Baggins, a hobbit.', image: '/images/the-hobbit.jpg', rating: 4.8, popularity: 89 },
    { id: 9, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', description: 'A futuristic society where happiness is mandated.', image: '/images/brave-new-world.jpg', rating: 4.5, popularity: 77 },
    { id: 10, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Psychological', description: 'A story about the mental anguish and moral dilemmas of an impoverished ex-student.', image: '/images/crime-and-punishment.jpg', rating: 4.7, popularity: 85 },
    { id: 11, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic', description: 'A tale of passion and revenge on the Yorkshire moors.', image: '/images/wuthering-heights.jpg', rating: 4.6, popularity: 83 },
    { id: 12, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Romance', description: 'The story of an orphaned girl and her experiences in life.', image: '/images/jane-eyre.jpg', rating: 4.8, popularity: 86 },
    { id: 13, title: 'Animal Farm', author: 'George Orwell', genre: 'Political satire', description: 'A farm is taken over by its overworked, mistreated animals.', image: '/images/animal-farm.jpg', rating: 4.7, popularity: 88 },
    { id: 14, title: 'The Odyssey', author: 'Homer', genre: 'Epic', description: 'The journey of Odysseus back to his home.', image: '/images/the-odyssey.jpg', rating: 4.9, popularity: 90 },
    { id: 15, title: 'Lord of the Flies', author: 'William Golding', genre: 'Allegory', description: 'A group of boys stranded on an uninhabited island.', image: '/images/lord-of-the-flies.jpg', rating: 4.6, popularity: 82 },
    { id: 16, title: 'The Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'The experiences of a U.S. bomber squadron during World War II.', image: '/images/catch-22.jpg', rating: 4.5, popularity: 80 },
    { id: 17, title: 'A Tale of Two Cities', author: 'Charles Dickens', genre: 'Historical', description: 'A story set in London and Paris before and during the French Revolution.', image: '/images/a-tale-of-two-cities.jpg', rating: 4.7, popularity: 85 },
    { id: 18, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Philosophical', description: 'A murder mystery that explores deep philosophical themes.', image: '/images/the-brothers-karamazov.jpg', rating: 4.8, popularity: 88 },
    { id: 19, title: 'Les Misérables', author: 'Victor Hugo', genre: 'Historical', description: 'A story about the struggles and redemption of Jean Valjean.', image: '/images/les-miserables.jpg', rating: 4.9, popularity: 90 },
    { id: 20, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', description: 'A young shepherd named Santiago embarks on a journey to find treasure.', image: '/images/the-alchemist.jpg', rating: 4.6, popularity: 85 },
    { id: 21, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', genre: 'Adventure', description: 'A story of an innocent man wrongly imprisoned.', image: '/images/the-count-of-monte-cristo.jpg', rating: 4.8, popularity: 89 },
    { id: 22, title: 'Dracula', author: 'Bram Stoker', genre: 'Gothic', description: 'A tale of the vampire Count Dracula.', image: '/images/dracula.jpg', rating: 4.7, popularity: 84 },
    { id: 23, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Science Fiction', description: 'A scientist creates a grotesque creature.', image: '/images/frankenstein.jpg', rating: 4.5, popularity: 80 },
    { id: 24, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', genre: 'Philosophical', description: 'A man retains his youth while his portrait ages.', image: '/images/the-picture-of-dorian-gray.jpg', rating: 4.6, popularity: 82 },
    { id: 25, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'An epic journey to destroy the One Ring.', image: '/images/the-lord-of-the-rings.jpg', rating: 4.9, popularity: 90 },
    { id: 26, title: 'Great Expectations', author: 'Charles Dickens', genre: 'Bildungsroman', description: 'The growth and personal development of an orphan named Pip.', image: '/images/great-expectations.jpg', rating: 4.7, popularity: 85 },
    { id: 27, title: 'The Grapes of Wrath', author: 'John Steinbeck', genre: 'Historical', description: 'A family migrates west during the Great Depression.', image: '/images/the-grapes-of-wrath.jpg', rating: 4.6, popularity: 83 },
    { id: 28, title: 'Ulysses', author: 'James Joyce', genre: 'Modernist', description: 'A day in the life of Leopold Bloom.', image: '/images/ulysses.jpg', rating: 4.4, popularity: 75 },
    { id: 29, title: 'Don Quixote', author: 'Miguel de Cervantes', genre: 'Satire', description: 'The adventures of an eccentric nobleman.', image: '/images/don-quixote.jpg', rating: 4.7, popularity: 85 },
    { id: 30, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian', description: 'A future where books are banned and burned.', image: '/images/fahrenheit-451.jpg', rating: 4.6, popularity: 84 },
    { id: 31, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The voyage of the whaling ship Pequod.', image: '/images/moby-dick.jpg', rating: 4.5, popularity: 80 },
    { id: 32, title: 'Lolita', author: 'Vladimir Nabokov', genre: 'Psychological', description: 'The story of a man’s obsession with a young girl.', image: '/images/lolita.jpg', rating: 4.6, popularity: 82 },
    { id: 33, title: 'Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'The experiences of a U.S. bomber squadron during World War II.', image: '/images/catch-22.jpg', rating: 4.5, popularity: 80 },
    { id: 34, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', genre: 'Magic realism', description: 'The story of the Buendía family.', image: '/images/one-hundred-years-of-solitude.jpg', rating: 4.8, popularity: 88 },
    { id: 35, title: 'The Sound and the Fury', author: 'William Faulkner', genre: 'Modernist', description: 'A novel about the decline of a Southern family.', image: '/images/the-sound-and-the-fury.jpg', rating: 4.6, popularity: 82 },
    { id: 36, title: 'Invisible Man', author: 'Ralph Ellison', genre: 'Fiction', description: 'A man’s experiences of racial discrimination.', image: '/images/invisible-man.jpg', rating: 4.7, popularity: 84 },
    { id: 37, title: 'Beloved', author: 'Toni Morrison', genre: 'Historical', description: 'A woman is haunted by the ghost of her daughter.', image: '/images/beloved.jpg', rating: 4.8, popularity: 88 },
    { id: 38, title: 'Anna Karenina', author: 'Leo Tolstoy', genre: 'Fiction', description: 'The tragic story of a married aristocrat and her affair.', image: '/images/anna-karenina.jpg', rating: 4.7, popularity: 85 },
    { id: 39, title: 'Mrs Dalloway', author: 'Virginia Woolf', genre: 'Modernist', description: 'The life of Clarissa Dalloway.', image: '/images/mrs-dalloway.jpg', rating: 4.5, popularity: 80 },
    { id: 40, title: 'Madame Bovary', author: 'Gustave Flaubert', genre: 'Realist', description: 'The life of a doctor’s wife, Emma Bovary.', image: '/images/madame-bovary.jpg', rating: 4.6, popularity: 82 },
    { id: 41, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'Adventure', description: 'A young boy’s adventures along the Mississippi River.', image: '/images/huckleberry-finn.jpg', rating: 4.7, popularity: 85 },
    { id: 42, title: 'The Iliad', author: 'Homer', genre: 'Epic', description: 'The story of the Trojan War.', image: '/images/the-iliad.jpg', rating: 4.8, popularity: 89 },
    { id: 43, title: 'To the Lighthouse', author: 'Virginia Woolf', genre: 'Modernist', description: 'The Ramsay family’s visit to Scotland.', image: '/images/to-the-lighthouse.jpg', rating: 4.6, popularity: 82 },
    { id: 44, title: 'The Old Man and the Sea', author: 'Ernest Hemingway', genre: 'Fiction', description: 'An old fisherman’s struggle with a giant marlin.', image: '/images/the-old-man-and-the-sea.jpg', rating: 4.7, popularity: 84 },
    { id: 45, title: 'Heart of Darkness', author: 'Joseph Conrad', genre: 'Novella', description: 'A journey up the Congo River.', image: '/images/heart-of-darkness.jpg', rating: 4.6, popularity: 82 },
    { id: 46, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', genre: 'Historical', description: 'A woman is shunned for having a child out of wedlock.', image: '/images/the-scarlet-letter.jpg', rating: 4.5, popularity: 80 },
    { id: 47, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Historical', description: 'A woman’s life in the South during the Civil War.', image: '/images/gone-with-the-wind.jpg', rating: 4.8, popularity: 88 },
    { id: 48, title: 'The Divine Comedy', author: 'Dante Alighieri', genre: 'Epic', description: 'The journey through Hell, Purgatory, and Heaven.', image: '/images/the-divine-comedy.jpg', rating: 4.9, popularity: 90 },
    { id: 49, title: 'Paradise Lost', author: 'John Milton', genre: 'Epic', description: 'The fall of man.', image: '/images/paradise-lost.jpg', rating: 4.8, popularity: 88 },
    { id: 50, title: 'The Stranger', author: 'Albert Camus', genre: 'Philosophical', description: 'A man’s emotional detachment from the world.', image: '/images/the-stranger.jpg', rating: 4.6, popularity: 84 },
];

function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Find the book from the sampleBooks array by ID
    const fetchedBook = sampleBooks.find(book => book.id === parseInt(id));
    setBook(fetchedBook);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>; // Show a loading message if the book is not yet loaded
  }

  return (
    <div className="book-details-container">
      <h2>{book.title}</h2>
      <div className="book-details">
        <img src={book.image} alt={book.title} className="book-image" />
        <div className="book-info">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Description:</strong> {book.description}</p>
          <p><strong>Rating:</strong> {book.rating} / 5</p>
          <p><strong>Popularity:</strong> {book.popularity}%</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;





