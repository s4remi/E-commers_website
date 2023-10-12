import express, { query } from "express";

import { myDB } from "../db/MyDB.js";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
export const router = express.Router();
router.post("/users/login", async (req, res) => {

router.get("/search", async (req, res) => {
  const booksres = await myDB.getSearch();
  //console.log(booksres);
  res.send(booksres);
});

router.post("/searchByIsbn", bodyParser.json(), async (req, res) => {
  const isbn = req.body.isbn;
  const query = { ISBN: parseInt(isbn, 10) };
  console.log(query);

  const bookInfo = await myDB.getBookByISBN({ query });
  console.log("inside of the searchByIsbn");
  console.log(bookInfo);
  //check
  if (bookInfo) {
    return res
      .status(200)
      .json({ data: bookInfo, message: "Successfully found" });
  } else {
    return res.status(401).json({ message: "Didn't find anything" });
  }
});
/*
  // try {
  //   const query = {};
  //   const books = await myDB.getSearch(query);

  //   if (books) {
  //     console.log("meeeeeeee!!!");
  //     const first40Books = books.slice(0, 40);
  //     res.status(200).json(first40Books);
  //   } else {
  //     res.status(404).json({ message: "No books found" });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Internal server error" });
  // }
*/

router.post("/users/login", bodyParser.json(), async (req, res) => {
  const { email, password } = req.body;
  myDB.getUser({ email: email }).then((existingUser) => {
    if (!existingUser) {
      return res.status(401).json({ message: "Wrong email or password" });
    }
    bcrypt.compare(password, existingUser.password, (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (result) {
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Wrong email or password" });
      }
    });
  });
});
router.get("/books", async (req, res) => {
  const { isbn } = req.query;
  myDB.getBookByISBN({ ISBN: parseInt(isbn) }).then((book) => {
    if (!book) {
      return res.status(401).json({ message: "Couldn't find this book" });
    } else {
      return res.json(book);
    }
  });
});
router.post("/users/register", async (req, res) => {
  const { email, password } = req.body;
  myDB.getUser({ email: email }).then((existingUser) => {
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        }

        myDB
          .createUser({
            email: email,
            password: hashedPassword,
          })
          .then((result) => {
            if (result) {
              return res
                .status(201)
                .json({ message: "User registered successfully" });
            } else {
              return res
                .status(400)
                .json({ message: "User registration failed" });
            }
          })
          .catch((error) => {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
          });
      });
    }
  });
});
export default router;
