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
  });
});

app.get(`/properties/:id`, (req, res) => {
  Apartments.find({ ID: req.params.id}).then((apartments) => {
    res.json(apartments);
    res.status(200);
  });
});

app.post("/properties", (req, res) => {
  Apartments.create(req.body)
  .then(Apartments => {
    res.status(200);
    res.json(Apartments);
  })
  .catch(error =>{
    res.status(500);
    res.json({
      error:"internal server error",
    })
  })
})

app.delete("/properties/:id", (req, res) =>{
  Apartments.findByIdAndDelete({ ID: req.params.id})
  .then((Apartments) => {
    res.status(200);
    res.json(Apartments);
  })
  .catch((error)=>{
      console.error(error);
  });
});

app.patch("/properties/:id", (req, res)=>{
  Apartments.findByIdAndUpdate(req.params.ID, req.body, {new: true})
  .then((newApartment)=>{
    if(newApartment){
      console.log(newApartment);
      res.status(200);
      res.json(newApartment);
    }else{
      console.error("not found");
      res.status(404);
    }
  })
})


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
