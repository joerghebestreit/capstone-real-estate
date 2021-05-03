const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
const apartments = require('../server/estateSchema')

app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
  const {method, url} = req;
  console.log("custom middleware");
  console.log(`${method} ${url}`);
  next();
})


app.get("/estateSchema", (req,res)=>{
    apartments.find().then((apartments)=>{
      res.json(apartments);
      res.status(200);
      console.log(apartments);
    });
  });
  
  mongoose.connect('mongodb+srv://joerghebestreit:yDsBhf74U94pMT32@blog-app.ovjjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
  
  const mongodb = mongoose.connection;
  
  mongodb.on('open', ()=> {
    app.listen(4000, () => {
      console.log("Listening on http://localhost:4000");
    });
    
  });