const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Apartments = require("./apartment");

app.use(express.json());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log("custom middleware");
  console.log(`${method} ${url}`);
  next();
});

app.get("/api/properties", (req, res) => {
  Apartments.find().then((apartments) => {
    res.json(apartments);
    res.status(200);
  });
});

app.get(`/api/properties/:id`, (req, res) => {
  Apartments.find({ ID: req.params.id }).then((apartments) => {
    res.json(apartments);
    res.status(200);
  });
});

app.post("/api/properties", (req, res) => {
  Apartments.create(req.body)
    .then((newApartment) => {
      res.status(200);
      res.json(newApartment);
    })
    .catch((error) => {
      res.status(500);
      res.json({
        error: "internal server error",
      });
    });
});

app.delete("/api/properties/:id", (req, res) => {
  Apartments.findOneAndDelete({ ID: req.params.id })
    .then((Apartments) => {
      res.status(200);
      res.json(Apartments);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.patch("/api/properties/:id", (req, res) => {
  Apartments.findOneAndUpdate(
    { ID: req.params.id },
    { new: true },
    req.body
  ).then((newApartment) => {
    if (newApartment) {
      res.status(200);
      res.json(newApartment);
    } else {
      console.error("not found");
      res.status(404);
    }
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
