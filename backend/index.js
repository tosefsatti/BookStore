import connectToMongo from "./db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import bookRoute from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
const app = express()


connectToMongo();
app.use(cors());
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 4000;

// routes
app.use("/book", bookRoute);
app.use("/user", userRouter );

app.listen(PORT, () => {
  console.log(`BookStore listening on port ${PORT}`)
})

