import express from "express";
import apiRouter from "./routes/api.js";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
//import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "frontend")));

app.use(express.static("frontend"));

//app.use(cors());
app.use(apiRouter);
app.listen(PORT, () => {
  console.log("server started");
  console.log("here!", PORT);
});
