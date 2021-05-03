import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import EstatePage from "./components/EstatePage";
import Footer from "./components/Footer"
import HomePage from "./components/Home"
import { NavLink } from "react-router-dom";

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
const apartments = require('../src/server/estateSchema')

app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
  const {method, url} = req;
  console.log("custom middleware");
  console.log(`${method} ${url}`);
  next();
})


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App__header">
      <NavLink className="headline"to="/"><p className="headline">HEBESTREIT<br></br>IMMOBILIEN</p></NavLink>
        <Navigation />
      </header>
      <main className="App__content">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/estate">
            <EstatePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage to="/home" />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

app.get("/estate", (req,res)=>{
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