import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize the Flask application
app = Flask(_name_)
app.config.from_object('config.Config')

# Initialize the database and migration tool
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import models
from models import User, Book, Review, UserBook

# Import routes
from routes import *

if _name_ == '_main_':
    app.run(debug=True)