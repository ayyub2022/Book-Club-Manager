# Book Club Manager
Book Club Manager is a comprehensive web application designed to manage books, reviews, and user interactions within a book club. This application allows users to browse books, read and post reviews, and manage their profiles.

## Features
- User Authentication: Register, login, and manage user profiles.
- Book Management: View detailed information about books, including their description, genre, rating, and popularity.
- Review System: Post, edit, and view reviews for books.
- Search and Filter: Search for books by title or author and filter the list of books based on the search query.
- Responsive Design: Fully responsive and accessible design for various devices.


## Technologies Used
 - Frontend: React, React  - - Router, CSS
 - Backend: Flask, SQLAlchemy
 - Database: PostgreSQL
 - HTTP Client: Axios
 - Authentication: JWT (JSON Web Tokens)
 - Deployment: Render (for Flask API), Vercel (for React frontend)


## Project Structure
### Frontend
- src/components: Contains React components used in the application.
 - Navbar.js: Navigation bar component.
 - Home.js: Main page displaying the list of books.
 - BookDetails.js: Detailed view of a selected book.
 - UserProfile.js: User profile management.
 - Login.js: User login form.
 - Register.js: User registration form.
 - ReadingPlanner.js: Planning tool for book reading.
 - Discoveries.js: Page for discovering new books.
 - Reviews.js: Component for displaying reviews.
 - EditReviewForm.js: Form for editing reviews.
- src/App.js: Main application component that sets up routing and renders the navigation bar and routes.

### Backend
- app.py: Main Flask application entry point.
- models.py: Defines database models using SQLAlchemy.
- routes.py: Contains API endpoints for books, reviews, and user management.
- config.py: Configuration file for Flask application settings.

The structure of the application should be as follows:
```console

.
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── README.md
├── client
│   ├── README.md
│   ├── package.json
│   ├── public
│   ├── package-lock.json
    ├── .gitignore
    ├── node_modules
    ├── src
        ├── index.css
        ├── index.js
        ├── components
            ├── App.css
            ├── App.js
            ├── Bookcard.css
            ├── EditReviewForm.js
            ├── Bookcard.js
            ├── Bookscomponents.js
            ├── Dashboard.js
            ├── Home.css
            ├── Home.js
            ├── LandingPage.js
            ├── LandingPage.css
            ├── Login.js
            ├── ReviewForm.js
            ├── Review.js
            ├── Navbar.css
            ├── Navbar.js
            ├── ReadingPlanner.css
            ├── ReadingPlanner.js
            ├── UserProfile.js
            ├── PrivateRoute.js
            └── Style.css

└── server
    ├── _pycache_
    ├── migration
    ├── administrator.py
    ├── app.db
    ├── app.py
    ├── config.py
    ├── models.py
    └── seed.py
    
``` 

## Getting Started
### Prerequisites
- Node.js: Required for running the frontend development server.
- Python 3: Required for running the backend server.
- PostgreSQL: Required for the database.

### Installation

#### Frontend
1. Navigate to the client directory:

```
cd client
``` 

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

#### Backend
1. Navigate to the server directory:

```
cd server
```

2. Create a virtual environment:

```
python -m venv venv
```

3. Activate the virtual environment:

 - On Windows:

```
venv\Scripts\activate
```

 - On macOS/Linux:

```
source venv/bin/activate
``` 

4. Install dependencies:

```
pip install -r requirements.txt
```

5. Set up the database:

```
python manage.py db upgrade
```

6. Start the Flask server:

```
python app.py
```

### Configuration
 - Frontend: Update the API base URL in src/App.js or use environment variables.
 - Backend: Configure database and environment settings in config.py.

## API Endpoints
 - /api/books: GET all books, POST a new book.
 - /api/books/:id: GET, PUT, DELETE a specific book.
 - /api/books/:id/reviews: GET all reviews for a specific book, POST a new review.
 - /api/reviews/:id: GET, PUT, DELETE a specific review.
 - /api/users: POST a new user, GET user info.
- /api/users/login: POST login request.

## Testing
- Frontend: Use React Testing Library and Jest for testing components.
- Backend: Use pytest for testing Flask routes and models.


## Deployment
- Frontend: Deployed on Vercel. Ensure environment variables are set for production.
- Backend: Deployed on Render. Ensure database and environment variables are configured properly.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push to the branch and create a pull request.  

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any questions or issues, please contact lennismaina75@gmail.com

