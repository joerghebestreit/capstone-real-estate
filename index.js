require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const Apartments = require("./apartment");
const cors = require('cors');

// BE on render

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const { method, url } = req;
  console.log("custom middleware");
  console.log(`${method} ${url}`);
  next();
});

app.get("/api/properties", (req, res) => {
  Apartments.find().then((apartments) => {
    res.json(apartments);
    console.log("GET")
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const connect = process.env.REACT_APP_MONGOOSE_CONNECT;

mongoose.connect(connect, { dbName:'capstone-real-estate', useNewUrlParser: true, useUnifiedTopology: true });

const mongodb = mongoose.connection;

const { PORT } = process.env;

mongodb.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
