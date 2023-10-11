import express from "express";

import { myDB } from "../db/MyDB.js";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
export const router = express.Router();

router.post("/search", bodyParser.json(), async (req, res) => {
  const { bookTitle } = req.body;
  myDB
    .getSearch({ title: bookTitle })
    .then((existingUser) => {
      if (foundBook) {
        // Book with the given title was found
        res.status(200).json({ message: "Book found", book: foundBook });
      } else {
        // Book with the given title was not found
        res.status(404).json({ message: "Book not found" });
      }
    })
    .catch((error) => {
      // Handle any database error
      res.status(500).json({ message: "Internal server error" });
    });
});

router.post("/users/login", bodyParser.json(), async (req, res) => {
  const { email, password } = req.body;
  myDB.getUser({ email: email }).then((existingUser) => {
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

router.post("/users/register", bodyParser.json(), async (req, res) => {
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
