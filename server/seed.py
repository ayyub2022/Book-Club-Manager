from app import app, db
from models import User, Book, Review, UserBook
from faker import Faker
from datetime import datetime

fake = Faker()

# Function to create the Flask app
if __name__ == "__main__":
    with app.app_context():
        print("Starting seed...")

        # Ensure all tables are created (if not already created)
        db.drop_all()
        db.create_all()

        # Create users
        user1 = User(
            username="user1",
            email="user1@example.com",
            password="Password1!"
        )
        user2 = User(
            username="user2",
            email="user2@example.com",
            password="Password2!"
        )

        # Create books
        book1 = Book(
            title="Book 1",
            author="Author 1",
            genre="Fiction",
            published_date=datetime.strptime("2023-01-01", "%Y-%m-%d").date()
        )
        book2 = Book(
            title="Book 2",
            author="Author 2",
            genre="Non-fiction",
            published_date=datetime.strptime("2022-05-15", "%Y-%m-%d").date()
        )

        # Add objects to session
        db.session.add_all([user1, user2, book1, book2])
        db.session.commit()

        # Add user-book associations (favorites) manually
        user_book1 = UserBook(user=user1, book=book1)
        user_book2 = UserBook(user=user1, book=book2)
        user_book3 = UserBook(user=user2, book=book2)

        db.session.add_all([user_book1, user_book2, user_book3])
        db.session.commit()

        # Create reviews
        review1 = Review(
            content="This book is amazing!",
            rating=5,
            user_id=user1.id,
            book_id=book1.id
        )
        review2 = Review(
            content="Interesting read.",
            rating=4,
            user_id=user2.id,
            book_id=book2.id
        )

        # Add reviews to session and commit to database
        db.session.add_all([review1, review2])
        db.session.commit()

        print("Database seeding completed.")

