# Code Review: 
- The code is well-organized and placed in the appropriate folders, but it might be better to remove the unused code in all the JS files like script.js/search.js, etc.
- Need to include the LICENSE file in the repository.

# E-commers_website

e-commers_website with Express, Node, MongoDB, js,html,css

## Authors

Ali, Zhehao

## Deploy link:

https://e-commerce-o08r.onrender.com

# E-commers-website

This is a full-stack dynamic website project that provides various features related to books, user registration, and more. The project includes several components, such as the server-side code, HTML templates, and CSS styles.

## Project Components

### `MyDB.js`

The `MyDB.js` file contains a JavaScript module that connects to a MongoDB database. It includes functions for user management and book searching. The following functions are included:

- `getUser`: Fetches user information from the database.
- `createUser`: Inserts a new user into the database.
- `getSearch`: Searches for books based on provided criteria.
- `getBookByISBN`: Retrieves books by ISBN.

### `api.js`

The `api.js` file serves as the backend of the application using Express.js. It exposes several API endpoints for various functionalities, including:

- Book search with pagination.
- Book search by ISBN.
- User login and registration.

### `package.json`

The `package.json` file lists the project's dependencies and metadata. It includes details like the project name, version, description, author, and licensing information. It also includes dependencies for packages like `express`, `mongodb`, and `bcrypt`.

### `index.html`

The `index.html` file is the main HTML template for the website. It defines the structure of the website, including the header, navigation bar, featured books section, icons, and a newsletter subscription form. It uses external resources like Font Awesome and Swiper for additional styling and functionality.

### `booklist.html`

The `booklist.html` file is an HTML template for displaying a list of books. It includes a navigation bar and a book section. The books are loaded dynamically with a "Load More" button.

### `styles.css`

The `styles.css` file contains the CSS styles used in the project. It defines various styles for elements like headers, buttons, forms, icons, and more. It also uses custom properties for colors and layout.

## Usage

To run the project, make sure you have Node.js installed. You can start the server by running the following command:

```bash
npm install
```
