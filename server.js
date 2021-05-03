const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const Apartments = require("./apartment");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log("custom middleware");
  console.log(`${method} ${url}`);
  next();
});

app.get("/properties", (req, res) => {
  Apartments.find().then((apartments) => {
    res.json(apartments);
    res.status(200);
    console.log("Hello " + apartments);
  });
});

mongoose.connect(
  "mongodb+srv://joerghebestreit:yDsBhf74U94pMT32@blog-app.ovjjd.mongodb.net/capstone-real-estate?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const mongodb = mongoose.connection;

mongodb.on("open", () => {
  app.listen(4000, () => {
    console.log("Listening on http://localhost:4000");
  });
});
