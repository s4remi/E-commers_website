import express from "express";
import apiRouter from "./routes/api.js";
import bodyParser from "body-parser";



const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static("frontend"));


app.use(apiRouter);
app.listen(PORT, () => {
  console.log("server started");
  console.log("here!", PORT);
});
