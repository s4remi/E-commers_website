import express from "express";

import { myDB } from "../db/MyDB.js";

export const router = express.Router();

router.get("/users", async (req, res) => {
  const user = await myDB.getUser({});
  res.json(user);
});

export default router;