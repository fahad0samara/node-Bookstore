import Book from "../model/book.model.js";

// Get all books with pagination, sorting, and filtering
export const getBooks = async (req, res) => {
    const { page = 1, limit = 10, sortBy = "title", sortOrder = "asc", searchTitle, searchAuthor } = req.query;
    const skip = (page - 1) * limit;

    let query = {};

    // Filter by title or author
    if (searchTitle) {
        query.title = { $regex: searchTitle, $options: "i" };
    }
    if (searchAuthor) {
        query.author = { $regex: searchAuthor, $options: "i" };
    }

    try {
        const books = await Book.find(query)
            .sort({ [sortBy]: sortOrder })
            .skip(parseInt(skip))
            .limit(parseInt(limit));

        const totalBooks = await Book.countDocuments(query);
        
        res.status(200).json({
            totalBooks,
            totalPages: Math.ceil(totalBooks / limit),
            currentPage: page,
            books
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get a single book by ID
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Add a new book
export const addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Update a book
export const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a book
export const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Server error" });
    }
};
