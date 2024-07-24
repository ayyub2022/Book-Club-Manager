import React, { useState } from 'react';
import BookCard from './BookCard'; // Import the BookCard component
import './Home.css'; // Ensure you have this CSS file for general styling

const books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', description: 'A novel about racial injustice in the Deep South.', image: '/images/to-kill-a-mockingbird.jpg' },
  { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', description: 'A totalitarian regime uses surveillance to control its citizens.', image: '/images/1984.jpg' },
  { id: 3, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The quest for vengeance against the white whale, Moby Dick.', image: '/images/moby-dick.jpg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic novel of manners and marriage in 19th century England.', image: '/images/pride-and-prejudice.jpg' },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A tale of wealth, class, and the American Dream during the Jazz Age.', image: '/images/the-great-gatsby.jpg' },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', description: 'An epic novel set against the backdrop of the Napoleonic Wars.', image: '/images/war-and-peace.jpg' },
  { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
  { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', description: 'A future society characterized by technological advancements and a loss of individuality.', image: '/images/brave-new-world.jpg' },
  { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', description: 'A dystopian novel about a future where books are banned and burned.', image: '/images/fahrenheit-451.jpg' },
  { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Gothic Romance', description: 'The story of an orphaned girl’s growth to adulthood and love.', image: '/images/jane-eyre.jpg' },
  { id: 11, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'A fantasy adventure following Bilbo Baggins as he embarks on a quest.', image: '/images/the-hobbit.jpg' },
  { id: 12, title: 'Lord of the Flies', author: 'William Golding', genre: 'Allegory', description: 'A group of boys stranded on an island descend into savagery.', image: '/images/lord-of-the-flies.jpg' },
  { id: 13, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', description: 'A satire on totalitarianism using a farm and its animals.', image: '/images/animal-farm.jpg' },
  { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', description: 'A young shepherd’s journey to discover his personal legend.', image: '/images/the-alchemist.jpg' },
  { id: 15, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Thriller', description: 'A thriller involving religious secrets and codes.', image: '/images/the-da-vinci-code.jpg' },
  { id: 16, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Historical Romance', description: 'A story set during the American Civil War and Reconstruction era.', image: '/images/gone-with-the-wind.jpg' },
  { id: 17, title: 'The Shining', author: 'Stephen King', genre: 'Horror', description: 'A man’s mental unraveling while staying in a haunted hotel.', image: '/images/the-shining.jpg' },
  { id: 18, title: 'Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'A satirical novel about the absurdities of war.', image: '/images/catch-22.jpg' },
  { id: 19, title: 'Little Women', author: 'Louisa May Alcott', genre: 'Coming-of-Age', description: 'The lives and struggles of the four March sisters.', image: '/images/little-women.jpg' },
  { id: 20, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic Fiction', description: 'A tale of passion and revenge on the Yorkshire moors.', image: '/images/wuthering-heights.jpg' },
  { id: 21, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
  { id: 22, title: 'The Road', author: 'Cormac McCarthy', genre: 'Post-Apocalyptic', description: 'A father and son journey through a desolate world.', image: '/images/the-road.jpg' },
  { id: 23, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', genre: 'Science Fiction', description: 'A soldier’s experience of time travel during World War II.', image: '/images/slaughterhouse-five.jpg' },
  { id: 24, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genre: 'Mystery', description: 'A journalist and hacker investigate a wealthy family’s dark secrets.', image: '/images/the-girl-with-the-dragon-tattoo.jpg' },
  { id: 25, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian', description: 'A competition where children fight to the death in a televised event.', image: '/images/the-hunger-games.jpg' },
  { id: 26, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A young nobleman becomes embroiled in a galactic struggle over a precious spice.', image: '/images/dune.jpg' },
  { id: 27, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', description: 'A series of adventures set in a magical land of talking animals and mythical creatures.', image: '/images/the-chronicles-of-narnia.jpg' },
  { id: 28, title: 'Ender’s Game', author: 'Orson Scott Card', genre: 'Science Fiction', description: 'A young boy is trained to be a military leader in a futuristic war.', image: '/images/enders-game.jpg' },
  { id: 29, title: 'Life of Pi', author: 'Yann Martel', genre: 'Adventure', description: 'A boy survives a shipwreck and shares a lifeboat with a Bengal tiger.', image: '/images/life-of-pi.jpg' },
  { id: 30, title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Historical Fiction', description: 'A story of friendship and redemption set in Afghanistan.', image: '/images/the-kite-runner.jpg' }
];

const featuredBooks = [
  { id: 1, title: 'To Kill a Mockingbird', description: 'A novel about racial injustice.', image: '/images/to-kill-a-mockingbird.jpg' },
  { id: 2, title: '1984', description: 'A totalitarian regime uses surveillance.', image: '/images/1984.jpg' },
  { id: 3, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The quest for vengeance against the white whale, Moby Dick.', image: '/images/moby-dick.jpg' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic novel of manners and marriage in 19th century England.', image: '/images/pride-and-prejudice.jpg' },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A tale of wealth, class, and the American Dream during the Jazz Age.', image: '/images/the-great-gatsby.jpg' },
  { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', description: 'An epic novel set against the backdrop of the Napoleonic Wars.', image: '/images/war-and-peace.jpg' },
  { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
  { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', description: 'A future society characterized by technological advancements and a loss of individuality.', image: '/images/brave-new-world.jpg' },
  { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', description: 'A dystopian novel about a future where books are banned and burned.', image: '/images/fahrenheit-451.jpg' },
  { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Gothic Romance', description: 'The story of an orphaned girl’s growth to adulthood and love.', image: '/images/jane-eyre.jpg' },
  { id: 11, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'A fantasy adventure following Bilbo Baggins as he embarks on a quest.', image: '/images/the-hobbit.jpg' },
  { id: 12, title: 'Lord of the Flies', author: 'William Golding', genre: 'Allegory', description: 'A group of boys stranded on an island descend into savagery.', image: '/images/lord-of-the-flies.jpg' },
  { id: 13, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', description: 'A satire on totalitarianism using a farm and its animals.', image: '/images/animal-farm.jpg' },
  { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', description: 'A young shepherd’s journey to discover his personal legend.', image: '/images/the-alchemist.jpg' },
  { id: 15, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Thriller', description: 'A thriller involving religious secrets and codes.', image: '/images/the-da-vinci-code.jpg' },
  { id: 16, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Historical Romance', description: 'A story set during the American Civil War and Reconstruction era.', image: '/images/gone-with-the-wind.jpg' },
  { id: 17, title: 'The Shining', author: 'Stephen King', genre: 'Horror', description: 'A man’s mental unraveling while staying in a haunted hotel.', image: '/images/the-shining.jpg' },
  { id: 18, title: 'Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'A satirical novel about the absurdities of war.', image: '/images/catch-22.jpg' },
  { id: 19, title: 'Little Women', author: 'Louisa May Alcott', genre: 'Coming-of-Age', description: 'The lives and struggles of the four March sisters.', image: '/images/little-women.jpg' },
  { id: 20, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic Fiction', description: 'A tale of passion and revenge on the Yorkshire moors.', image: '/images/wuthering-heights.jpg' },
  { id: 21, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
  { id: 22, title: 'The Road', author: 'Cormac McCarthy', genre: 'Post-Apocalyptic', description: 'A father and son journey through a desolate world.', image: '/images/the-road.jpg' },
  { id: 23, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', genre: 'Science Fiction', description: 'A soldier’s experience of time travel during World War II.', image: '/images/slaughterhouse-five.jpg' },
  { id: 24, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genre: 'Mystery', description: 'A journalist and hacker investigate a wealthy family’s dark secrets.', image: '/images/the-girl-with-the-dragon-tattoo.jpg' },
  { id: 25, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian', description: 'A competition where children fight to the death in a televised event.', image: '/images/the-hunger-games.jpg' },
  { id: 26, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A young nobleman becomes embroiled in a galactic struggle over a precious spice.', image: '/images/dune.jpg' },
  { id: 27, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', description: 'A series of adventures set in a magical land of talking animals and mythical creatures.', image: '/images/the-chronicles-of-narnia.jpg' },
  { id: 28, title: 'Ender’s Game', author: 'Orson Scott Card', genre: 'Science Fiction', description: 'A young boy is trained to be a military leader in a futuristic war.', image: '/images/enders-game.jpg' },
  { id: 29, title: 'Life of Pi', author: 'Yann Martel', genre: 'Adventure', description: 'A boy survives a shipwreck and shares a lifeboat with a Bengal tiger.', image: '/images/life-of-pi.jpg' },
  { id: 30, title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Historical Fiction', description: 'A story of friendship and redemption set in Afghanistan.', image: '/images/the-kite-runner.jpg' }
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h2>Books You Might Like</h2>
      <div className="featured-books-slider">
        {featuredBooks.map(book => (
          <div className="featured-book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h4>{book.title}</h4>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search for books..."
        className="search-bar"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="home-book-list">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;








// import React, { useState } from 'react';
// import BookCard from './BookCard'; // Import the BookCard component
// import './Home.css'; // Ensure you have this CSS file for general styling

// const books = [
//   { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', description: 'A novel about racial injustice in the Deep South.', image: '/images/to-kill-a-mockingbird.jpg' },
//   { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian', description: 'A totalitarian regime uses surveillance to control its citizens.', image: '/images/1984.jpg' },
//   { id: 3, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', description: 'The quest for vengeance against the white whale, Moby Dick.', image: '/images/moby-dick.jpg' },
//   { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', description: 'A classic novel of manners and marriage in 19th century England.', image: '/images/pride-and-prejudice.jpg' },
//   { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', description: 'A tale of wealth, class, and the American Dream during the Jazz Age.', image: '/images/the-great-gatsby.jpg' },
//   { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', description: 'An epic novel set against the backdrop of the Napoleonic Wars.', image: '/images/war-and-peace.jpg' },
//   { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
//   { id: 8, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', description: 'A future society characterized by technological advancements and a loss of individuality.', image: '/images/brave-new-world.jpg' },
//   { id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Science Fiction', description: 'A dystopian novel about a future where books are banned and burned.', image: '/images/fahrenheit-451.jpg' },
//   { id: 10, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Gothic Romance', description: 'The story of an orphaned girl’s growth to adulthood and love.', image: '/images/jane-eyre.jpg' },
//   { id: 11, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', description: 'A fantasy adventure following Bilbo Baggins as he embarks on a quest.', image: '/images/the-hobbit.jpg' },
//   { id: 12, title: 'Lord of the Flies', author: 'William Golding', genre: 'Allegory', description: 'A group of boys stranded on an island descend into savagery.', image: '/images/lord-of-the-flies.jpg' },
//   { id: 13, title: 'Animal Farm', author: 'George Orwell', genre: 'Political Satire', description: 'A satire on totalitarianism using a farm and its animals.', image: '/images/animal-farm.jpg' },
//   { id: 14, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', description: 'A young shepherd’s journey to discover his personal legend.', image: '/images/the-alchemist.jpg' },
//   { id: 15, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Thriller', description: 'A thriller involving religious secrets and codes.', image: '/images/the-da-vinci-code.jpg' },
//   { id: 16, title: 'Gone with the Wind', author: 'Margaret Mitchell', genre: 'Historical Romance', description: 'A story set during the American Civil War and Reconstruction era.', image: '/images/gone-with-the-wind.jpg' },
//   { id: 17, title: 'The Shining', author: 'Stephen King', genre: 'Horror', description: 'A man’s mental unraveling while staying in a haunted hotel.', image: '/images/the-shining.jpg' },
//   { id: 18, title: 'Catch-22', author: 'Joseph Heller', genre: 'Satire', description: 'A satirical novel about the absurdities of war.', image: '/images/catch-22.jpg' },
//   { id: 19, title: 'Little Women', author: 'Louisa May Alcott', genre: 'Coming-of-Age', description: 'The lives and struggles of the four March sisters.', image: '/images/little-women.jpg' },
//   { id: 20, title: 'Wuthering Heights', author: 'Emily Brontë', genre: 'Gothic Fiction', description: 'A tale of passion and revenge on the Yorkshire moors.', image: '/images/wuthering-heights.jpg' },
//   { id: 21, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', description: 'A story about teenage alienation and loss of innocence.', image: '/images/the-catcher-in-the-rye.jpg' },
//   { id: 22, title: 'The Road', author: 'Cormac McCarthy', genre: 'Post-Apocalyptic', description: 'A father and son journey through a desolate world.', image: '/images/the-road.jpg' },
//   { id: 23, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', genre: 'Science Fiction', description: 'A soldier’s experience of time travel during World War II.', image: '/images/slaughterhouse-five.jpg' },
//   { id: 24, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genre: 'Mystery', description: 'A journalist and hacker investigate a wealthy family’s dark secrets.', image: '/images/the-girl-with-the-dragon-tattoo.jpg' },
//   { id: 25, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian', description: 'A competition where children fight to the death in a televised event.', image: '/images/the-hunger-games.jpg' },
//   { id: 26, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', description: 'A young nobleman becomes embroiled in a galactic struggle over a precious spice.', image: '/images/dune.jpg' },
//   { id: 27, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy', description: 'A series of adventures set in a magical land of talking animals and mythical creatures.', image: '/images/the-chronicles-of-narnia.jpg' },
//   { id: 28, title: 'Ender’s Game', author: 'Orson Scott Card', genre: 'Science Fiction', description: 'A young boy is trained to be a military leader in a futuristic war.', image: '/images/enders-game.jpg' },
//   { id: 29, title: 'Life of Pi', author: 'Yann Martel', genre: 'Adventure', description: 'A boy survives a shipwreck and shares a lifeboat with a Bengal tiger.', image: '/images/life-of-pi.jpg' },
//   { id: 30, title: 'The Kite Runner', author: 'Khaled Hosseini', genre: 'Historical Fiction', description: 'A story of friendship and redemption set in Afghanistan.', image: '/images/the-kite-runner.jpg' }
// ];

// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredBooks = books.filter(book =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="home-container" style={{ padding: '20px' }}>
//       <h2>Books</h2>
//       <input
//         type="text"
//         placeholder="Search for books..."
//         className="search-bar"
//         style={{
//           width: '100%',
//           padding: '10px',
//           marginBottom: '20px',
//           border: '1px solid #ddd',
//           borderRadius: '4px',
//           fontSize: '1rem',
//         }}
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <div className="home-book-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
//         {filteredBooks.map(book => (
//           <div className="home-book-card" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={book.id}>
//             <img src={book.image} alt={book.title} style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
//             <h3 style={{ marginTop: '10px', fontSize: '1.2rem', textAlign: 'center' }}>{book.title}</h3>
//             <p style={{ fontSize: '1rem', color: '#555', textAlign: 'center' }}>{book.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


