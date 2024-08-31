import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String


  });

  const Book = mongoose.model("book", bookSchema);

  export default Book;