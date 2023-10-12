import express from "express";

import { myDB } from "../db/MyDB.js";
import bcrypt from "bcrypt";
export const router = express.Router();
router.post("/users/login", async (req, res) => {
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
