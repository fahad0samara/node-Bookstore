
# Node.js Bookstore API

This is a simple RESTful API built with Node.js, Express, and MongoDB for managing a bookstore. It allows you to perform CRUD operations on books and user authentication (signup and login).

## Features

- CRUD operations for books (Create, Read, Update, Delete)
- User authentication (signup and login)
- Passwords are hashed using bcryptjs

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fahad0samara/node-Bookstore-.git
```

2. Install dependencies:

```bash
cd node-Bookstore-
npm install
```

3. Create a `.env` file in the root directory and add the following:

```plaintext
MongoDBURI=<your_mongodb_uri>
PORT=<port_number>
```

Replace `<your_mongodb_uri>` with your MongoDB connection URI and `<port_number>` with the port you want the server to run on.

4. Start the server:

```bash
npm start
```

## Routes

### Books

- `GET /book` - Get all books
- `GET /book/:id` - Get a single book by ID
- `POST /book` - Add a new book
- `PUT /book/:id` - Update a book
- `DELETE /book/:id` - Delete a book

### Users

- `POST /user/signup` - User signup
- `POST /user/login` - User login

## Dependencies

- express
- mongoose
- bcryptjs
- dotenv
- cors




