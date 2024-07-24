from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, User, Book, Review, UserBook

app = Flask(__name__)
app.config.from_object('config.Config')

# Initialize the database and migration tool
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/books', methods=['GET', 'POST'])
def manage_books():
    if request.method == 'GET':
        books = Book.query.all()
        return jsonify([book.to_dict() for book in books])
    elif request.method == 'POST':
        data = request.json
        new_book = Book(title=data['title'], author=data['author'])
        db.session.add(new_book)
        db.session.commit()
        return jsonify(new_book.to_dict()), 201

@app.route('/books/<int:book_id>', methods=['GET', 'PUT', 'DELETE'])
def book_detail(book_id):
    book = Book.query.get_or_404(book_id)
    if request.method == 'GET':
        return jsonify(book.to_dict())
    elif request.method == 'PUT':
        data = request.json
        book.title = data['title']
        book.author = data['author']
        db.session.commit()
        return jsonify(book.to_dict())
    elif request.method == 'DELETE':
        db.session.delete(book)
        db.session.commit()
        return '', 204

@app.route('/reviews', methods=['POST'])
def add_review():
    data = request.json
    new_review = Review(content=data['content'], rating=data['rating'], book_id=data['book_id'], user_id=data['user_id'])
    db.session.add(new_review)
    db.session.commit()
    return jsonify(new_review.to_dict()), 201

@app.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    review = Review.query.get_or_404(review_id)
    db.session.delete(review)
    db.session.commit()
    return '', 204

@app.route('/users/<int:user_id>/favorites', methods=['POST', 'DELETE'])
def manage_favorites(user_id):
    data = request.json
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        book = Book.query.get_or_404(data['book_id'])
        user.favorites.append(book)
        db.session.commit()
        return jsonify(user.to_dict())
    elif request.method == 'DELETE':
        book = Book.query.get_or_404(data['book_id'])
        user.favorites.remove(book)
        db.session.commit()
        return '', 204

if __name__ == '__main__':
    app.run(debug=True)
