from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import func
import re
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ("-reviews.user", "-favorite_books.favorited_by")
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    _password = db.Column(db.String, nullable=False)

    reviews = db.relationship("Review", back_populates="user")
    favorite_books = association_proxy("user_books", "book")

    @validates("username")
    def validate_username(self, key, username):
        user = User.query.filter_by(username=username).first()
        if user:
            raise ValueError("Username already exists")
        return username

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        if (
            len(password) < 8
            or not re.search(r"[A-Z]", password)
            or not re.search(r"[a-z]", password)
            or not re.search(r"[0-9]", password)
            or not re.search(r"[\W_]", password)
        ):
            raise ValueError(
                "Password MUST be at least 8 characters, include uppercase, lowercase, numbers, and special characters."
            )

        password_hash = bcrypt.generate_password_hash(password.encode("utf-8"))
        self._password = password_hash.decode("utf-8")

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password, password.encode("utf-8"))

    @validates("email")
    def validate_email(self, key, email):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            raise ValueError("Invalid email address")
        existing_email = User.query.filter_by(email=email).first()
        if existing_email:
            raise ValueError("Email already exists")
        return email

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
        }

    def __repr__(self) -> str:
        return f"password {self._password}"


class Book(db.Model, SerializerMixin):
    __tablename__ = "books"

    serialize_rules = ("-reviews.book", "-favorited_by.books")
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    published_date = db.Column(db.Date(), nullable=False)
    cover_image_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    is_removable = db.Column(db.Boolean, default=True)  # New field to indicate if the book can be removed

    reviews = db.relationship("Review", back_populates="book")
    favorited_by = association_proxy("user_books", "user")

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "genre": self.genre,
            "published_date": (
                self.published_date.strftime("%Y-%m-%d")
                if self.published_date
                else None
            ),
            "is_removable": self.is_removable , # Include the new field in the dict representation
            "image":f"{self.cover_image_url}"
        }


class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    serialize_rules = ("-user.reviews", "-book.reviews")
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"), nullable=False)

    user = db.relationship("User", back_populates="reviews")
    book = db.relationship("Book", back_populates="reviews")

    @validates("rating")
    def validate_rating(self, key, rating):
        if not (1 <= int(rating) <= 5):
            raise ValueError("Rating must be between 1 and 5")
        return rating

    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "rating": self.rating,
            "user_id": self.user_id,
            "book_id": self.book_id,
        }


class UserBook(db.Model, SerializerMixin):
    __tablename__ = "user_books"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey("books.id"), nullable=False)

    user = db.relationship(User, backref="user_books")
    book = db.relationship(Book, backref="user_books")

    def __init__(self, user, book):
        self.user = user
        self.book = book

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": f"{self.user_id}",
            "book_id": f"{self.book_id}",
        }


