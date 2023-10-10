import express from "express";

import { myDB } from "../db/MyDB.js";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
export const router = express.Router();

router.get("/users/login", async (req, res) => {
  const user = await myDB.getUser({});
  res.json(user);
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
