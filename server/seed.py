from app import app, db
from models import User, Book, Review

with app.app_context():
    db.create_all()

    # Add sample data
    if not User.query.first():
        user = User(username='john_doe')
        db.session.add(user)
        db.session.commit()

    if not Book.query.first():
        book = Book(title='1984', author='George Orwell')
        db.session.add(book)
        db.session.commit()
    
    # Example review
    if not Review.query.first():
        review = Review(content='Great book!', rating=5, book_id=1, user_id=1)
        db.session.add(review)
        db.session.commit()
