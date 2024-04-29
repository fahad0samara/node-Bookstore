import express from "express";
import {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
