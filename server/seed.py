from extensions import db, bcrypt
from models import User, Book, Review, UserBook
from datetime import date

# Drop all tables and recreate them
db.drop_all()
db.create_all()

# Create some users
user1 = User(
    username='johndave',
    email='johndave@example.com',
    password='Password123!'
)
user2 = User(
    username='janemike',
    email='janemike@example.com',
    password='SecurePass456!'
)

# Create some books
book1 = Book(
    title='The Great Gatsby',
    author='F. Scott Fitzgerald',
    genre='Classic',
    published_date=date(1925, 4, 10)
)
book2 = Book(
    title='To Kill a Mockingbird',
    author='Harper Lee',
    genre='Classic',
    published_date=date(1960, 7, 11)
)
book3 = Book(
    title='1984',
    author='George Orwell',
    genre='Dystopian',
    published_date=date(1949, 6, 8)
)

# Create some reviews
review1 = Review(
    content='A fascinating glimpse into the American Dream.',
    rating=5,
    user=user1,
    book=book1
)
review2 = Review(
    content='A gripping tale of racial injustice.',
    rating=4,
    user=user2,
    book=book2
)
review3 = Review(
    content='A chilling depiction of a dystopian future.',
    rating=5,
    user=user1,
    book=book3
)

# Create some user-book relationships
user_book1 = UserBook(
    user=user1,
    book=book1
)
user_book2 = UserBook(
    user=user2,
    book=book2
)
user_book3 = UserBook(
    user=user1,
    book=book3
)
user_book4 = UserBook(
    user=user2,
    book=book1
)

# Add all to the session and commit
db.session.add_all([user1, user2, book1, book2, book3, review1, review2, review3, user_book1, user_book2, user_book3, user_book4])
db.session.commit()

print("Database seeded successfully!")
