import express from "express";
import apiRouter from "../routes/api.js";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(apiRouter);
app.listen(PORT, () => {
  console.log("server started");
});