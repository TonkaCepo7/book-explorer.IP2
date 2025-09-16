import express from "express";
import fs from "fs-extra";

const router = express.Router();
const filePath = "./data/books.json";

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await fs.readJson(filePath);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error reading books" });
  }
});

// POST add new book
router.post("/", async (req, res) => {
  try {
    const books = await fs.readJson(filePath);
    const newBook = { id: Date.now().toString(), ...req.body }; // id uvijek string
    books.push(newBook);
    await fs.writeJson(filePath, books, { spaces: 2 });
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Error adding book" });
  }
});

// PUT update book
router.put("/:id", async (req, res) => {
  try {
    const books = await fs.readJson(filePath);
    const index = books.findIndex((b) => String(b.id) === String(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: "Book not found" });
    }
    books[index] = { ...books[index], ...req.body };
    await fs.writeJson(filePath, books, { spaces: 2 });
    res.json(books[index]);
  } catch (err) {
    res.status(500).json({ error: "Error updating book" });
  }
});

// DELETE book
router.delete("/:id", async (req, res) => {
  try {
    const books = await fs.readJson(filePath);
    const filtered = books.filter((book) => String(book.id) !== String(req.params.id));

    if (books.length === filtered.length) {
      return res.status(404).json({ error: "Book not found" });
    }

    await fs.writeJson(filePath, filtered, { spaces: 2 });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting book" });
  }
});

export default router;

