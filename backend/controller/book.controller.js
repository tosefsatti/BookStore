import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    return res.status(500).json({ error: "Failed to fetch books" });
  }
};
