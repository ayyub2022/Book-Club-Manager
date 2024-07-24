from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_restful import Resource, Api 
from flask_cors import CORS
from models import db, User, Book, Review, UserBook

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Initialize the database and migration tool
db.init_app(app)
migrate = Migrate(app, db)

# Instantiate REST API
api = Api(app)
# Instantiate CORS
CORS(app)


class Book(Resource):
    def get(self, id=None):
        if id is None:
            books = [book.to_dict() for book in Book.query.all()]
            return jsonify(books), 200
        else:
            book = Book.query.get_or_404(id)
            return jsonify(book.to_dict()), 200

    def post(self):
        data = request.get_json()
        if not data:
            return {"message": "No input data provided"}, 400
        
        new_book = Book(
            title=data['title'],
            author=data['author'],
            genre=data['genre']
        )
        db.session.add(new_book)
        db.session.commit()
        return jsonify(new_book.to_dict()), 201

    def put(self, id=None):
        book = Book.query.get_or_404(id)
        data = request.get_json()
        if not data:
            return {"message": "No input data provided"}, 400

        book.title = data.get('title', book.title)
        book.author = data.get('author', book.author)
        book.genre = data.get('genre', book.genre)
    
        db.session.commit()
        return jsonify(book.to_dict()), 200

    def delete(self, id=None):
        book = Book.query.get_or_404(id)
        db.session.delete(book)
        db.session.commit()
        return {"message": "Book deleted"}, 204
    
api.add_resource(Book, '/book', '/book/<int:id>')


class Review(Resource):
    def get(self, id=None):
        if id is None:
            reviews = [review.to_dict() for review in Review.query.all()]
            return jsonify(reviews), 200
        else:
            review = Review.query.get_or_404(id)
            return jsonify(review.to_dict()), 200

    def post(self):
        data = request.get_json()
        if not data:
            return {"message": "No input data provided"}, 400
        
        new_review = Review(
            content=data['content'],
            rating=data['rating'],
            book_id=data['book_id'],
            user_id=data['user_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.to_dict()), 201

    def put(self, id=None):
        review = Review.query.get_or_404(id)
        data = request.get_json()
        if not data:
            return {"message": "No input data provided"}, 400

        review.content = data.get('content', review.content)
        review.rating = data.get('rating', review.rating)
        review.book_id = data.get('book_id', review.book_id)
        review.user_id = data.get('user_id', review.user_id)
    
        db.session.commit()
        return jsonify(review.to_dict()), 200

    def delete(self, id=None):
        review = Review.query.get_or_404(id)
        db.session.delete(review)
        db.session.commit()
        return {"message": "Review deleted"}, 204
    
api.add_resource(Review, '/review', '/review/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
