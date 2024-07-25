from app import app, db
from models import User, Book, Review, UserBook
from faker import Faker
from datetime import datetime
from random import randint

fake = Faker()

def make_users():
    print("Seeding users...")
    User.query.delete()
    
    users = [User(
        username=fake.user_name(),
        email=fake.email(),
        password="Password1!"  # Hash passwords in production
    ) for _ in range(20)]  # Create 20 users
    
    db.session.add_all(users)
    db.session.commit()
    print("Users seeding completed.")

def make_books():
    print("Seeding books...")
    Book.query.delete()
    users = User.query.all()

    books = [
        {"title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Fiction", "published_date": "1960-07-11"},
        {"title": "1984", "author": "George Orwell", "genre": "Dystopian", "published_date": "1949-06-08"},
        {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Fiction", "published_date": "1925-04-10"},
        {"title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance", "published_date": "1813-01-28"},
        {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Fiction", "published_date": "1951-07-16"},
        {"title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy", "published_date": "1937-09-21"},
        {"title": "Fahrenheit 451", "author": "Ray Bradbury", "genre": "Dystopian", "published_date": "1953-10-19"},
        {"title": "Brave New World", "author": "Aldous Huxley", "genre": "Dystopian", "published_date": "1932-08-30"},
        {"title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "genre": "Fantasy", "published_date": "1954-07-29"},
        {"title": "The Diary of a Young Girl", "author": "Anne Frank", "genre": "Biography", "published_date": "1947-06-25"},
        {"title": "Harry Potter and the Philosopher's Stone", "author": "J.K. Rowling", "genre": "Fantasy", "published_date": "1997-06-26"},
        {"title": "The Da Vinci Code", "author": "Dan Brown", "genre": "Thriller", "published_date": "2003-03-18"},
        {"title": "The Alchemist", "author": "Paulo Coelho", "genre": "Adventure", "published_date": "1988-05-01"},
        {"title": "Moby Dick", "author": "Herman Melville", "genre": "Adventure", "published_date": "1851-10-18"},
        {"title": "War and Peace", "author": "Leo Tolstoy", "genre": "Historical", "published_date": "1869-01-01"},
        {"title": "Les Misérables", "author": "Victor Hugo", "genre": "Historical", "published_date": "1862-01-01"},
        {"title": "Anna Karenina", "author": "Leo Tolstoy", "genre": "Fiction", "published_date": "1877-01-01"},
        {"title": "The Odyssey", "author": "Homer", "genre": "Epic", "published_date": "0001-01-01"},
        {"title": "The Iliad", "author": "Homer", "genre": "Epic", "published_date": "0001-01-01"},
        {"title": "Don Quixote", "author": "Miguel de Cervantes", "genre": "Adventure", "published_date": "1605-01-16"},
        {"title": "Catch-22", "author": "Joseph Heller", "genre": "Satire", "published_date": "1961-11-10"},
        {"title": "The Road", "author": "Cormac McCarthy", "genre": "Post-apocalyptic", "published_date": "2006-09-26"},
    ]
    
    def parse_date(date_string):
        try:
            return datetime.strptime(date_string, '%Y-%m-%d').date()
        except ValueError:
            print(f"Date parsing error for date string: {date_string}")
            return None

    book_objects = []
    for book in books:
        book["published_date"] = parse_date(book["published_date"])
        book["user_id"] = users[randint(0, len(users) - 1)].id
        if book["published_date"]:
            book_objects.append(Book(**book))

    db.session.add_all(book_objects)
    db.session.commit()
    print("Books seeding completed.")

def make_user_books():
    print("Seeding user-books...")
    UserBook.query.delete()
    
    user_books = []
    users = User.query.all()
    books = Book.query.all()

    for user in users:
        favorite_books = fake.random_elements(elements=books, unique=True, length=5)
        for book in favorite_books:
            user_books.append(UserBook(user=user, book=book))

    db.session.add_all(user_books)
    db.session.commit()
    print("User-books seeding completed.")

def make_reviews():
    print("Seeding reviews...")
    Review.query.delete()  # Clear existing reviews

    review_list = []

    # Define review contents and ratings for each book
    reviews = [
        ["An incredible page-turner, couldn't put it down!", "The characters felt so real and relatable.", "A bit slow in the middle, but worth the wait.", "Great storytelling, but the ending was predictable.", "Loved the author's writing style!", "Not my cup of tea, but others might enjoy it."],
        ["Beautifully written, a true masterpiece.", "The plot was a bit convoluted.", "Engaging from start to finish.", "Great character development, but the pacing was off."],
        ["A captivating read with unexpected twists.", "The book started strong but lost momentum.", "Interesting premise, but the execution was lacking.", "An enjoyable read with some thought-provoking ideas.", "A bit too dark for my taste, but well-written."],
        ["An epic saga that spans generations.", "Rich world-building and immersive storytelling.", "A bit lengthy, but worth the journey.", "The ending was satisfying, though bittersweet."],
        ["A classic that lives up to the hype.", "The themes are still relevant today.", "A must-read for anyone who loves literary fiction.", "A bit dense, but rewarding for patient readers."],
        ["A gripping thriller with lots of suspense.", "The twists and turns kept me guessing.", "Some plot holes, but overall an enjoyable read.", "The characters were well-developed, though."],
        ["A heartwarming story about family and friendship.", "The narrative felt a bit predictable.", "Charming and uplifting, perfect for a cozy read.", "The writing style was lovely and engaging."],
        ["A thought-provoking novel about societal issues.", "The book is a bit heavy, but important.", "Well-researched and insightful.", "A challenging read, but worth it for the depth."],
        ["A delightful romance with great chemistry.", "The love story was sweet, though a bit formulaic.", "A perfect escape read for fans of romance.", "The characters were endearing and relatable."],
        ["An adventurous fantasy with magical realms.", "The world-building was impressive.", "The plot was a bit predictable, but enjoyable.", "Great for fans of epic fantasy novels."],
        ["A powerful memoir that offers a unique perspective.", "Heartfelt and inspiring, though a bit raw.", "The author's journey is incredibly moving.", "A compelling read with strong emotional impact."],
        ["A humorous take on everyday life.", "The book was funny, though sometimes over the top.", "A light-hearted read with some clever insights.", "The humor might not appeal to everyone."],
        ["A chilling horror novel with a great atmosphere.", "The suspense was palpable throughout.", "The ending was a bit abrupt, but overall scary.", "Great for fans of psychological thrillers."],
        ["An inspiring tale of personal growth and resilience.", "The book was motivational, though a bit cliché.", "The protagonist's journey is relatable and uplifting.", "An encouraging read with a positive message."],
        ["A historical novel that vividly brings the past to life.", "Well-researched and informative.", "The narrative was engaging but sometimes slow.", "A good read for history buffs."],
        ["A science fiction adventure with imaginative concepts.", "The plot was exciting and innovative.", "Some elements were confusing, but intriguing.", "Great for fans of speculative fiction."],
        ["A heart-wrenching story of love and loss.", "The emotional depth was profound.", "A beautifully written but heavy read.", "The themes were handled with sensitivity."],
        ["A fast-paced thriller with lots of action.", "The plot kept me on the edge of my seat.", "Some parts were a bit far-fetched, but entertaining.", "The characters were well-drawn and engaging."],
        ["A poignant novel exploring complex relationships.", "The writing was beautiful and evocative.", "A deep and thoughtful read, though slow at times.", "The character development was excellent."],
        ["An intriguing mystery with a clever twist.", "The pacing was just right for a mystery novel.", "Some clues were a bit too obvious, but engaging.", "A satisfying conclusion with a surprising reveal."],
        ["A young adult novel with a relatable protagonist.", "The themes of growing up were well-handled.", "A bit predictable, but heartwarming.", "Great for younger readers and those young at heart."],
        ["A poetic exploration of life's big questions.", "The language was beautiful, though abstract.", "A thought-provoking read, though dense.", "The author's insights are profound and reflective."],
        ["A gripping account of a true-life adventure.", "The real-life drama was as compelling as fiction.", "Well-written and engaging throughout.", "An inspiring story of courage and determination."]
    ]
    reviews.append(["A thought-provoking and compelling story.", "The book was a bit slow in parts, but worth it.", "An interesting read with strong characters."])

    ratings = [
        [5, 4, 3, 4, 5, 2],
        [5, 3, 5, 3],
        [4, 3, 3, 4, 3],
        [5, 4, 5, 4],
        [5, 5, 4, 5],
        [4, 3, 4, 3],
        [5, 4, 5, 3],
        [5, 5, 4, 4],
        [4, 3, 4],
        [5, 4, 3],
        [4, 3, 4, 3],
        [4, 3, 5, 4],
        [5, 5, 4, 4, 5],
        [5, 4, 4, 4],
        [5, 4, 5, 3],
        [5, 4, 5, 4, 5],
        [3, 4, 4, 5],
        [5, 5, 4, 4],
        [2, 4, 5],
        [4, 4, 4, 5, 3],
        [2, 4, 5, 3]
    ]
    ratings.append([4, 3, 5])

    num_books = Book.query.count()  # Get the actual count of books
    num_users = User.query.count()  # Get the actual count of users

    print(f"Total books: {num_books}")
    print(f"Total users: {num_users}")

    if num_books != len(reviews):
        print(f"Warning: Number of review lists ({len(reviews)}) does not match the number of books ({num_books}).")

    for book_id in range(1, num_books + 1):
        if book_id > len(reviews) or book_id > len(ratings):
            print(f"Warning: No reviews or ratings available for book_id {book_id}.")
            continue

        book_reviews = reviews[book_id - 1]  # Get reviews for the current book
        book_ratings = ratings[book_id - 1]  # Get ratings for the current book

        for i in range(len(book_reviews)):
            user_id = randint(1, num_users)  # Randomly select a user_id
            rating = book_ratings[i % len(book_ratings)]  # Ensure rating is within range
            content = book_reviews[i]

            # Debugging print statement
            print(f"Creating review: user_id={user_id}, book_id={book_id}, rating={rating}, content={content}")

            review = Review(
                user_id=user_id,
                book_id=book_id,
                rating=rating,
                content=content,
            )
            review_list.append(review)

    # Add all reviews to the database and commit
    db.session.add_all(review_list)
    db.session.commit()
    print("Reviews seeding completed.")

if __name__ == "__main__":
    with app.app_context():
        make_users()
        make_books()
        make_user_books()
        make_reviews()
