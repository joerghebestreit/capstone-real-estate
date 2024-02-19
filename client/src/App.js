import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import EstatePage from "./components/EstatePage";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import { NavLink } from "react-router-dom";
import Details from "./components/Details";
import ScrollMemory from "react-router-scroll-memory";
import Login from "./components/admin-Components/Login";
import Crud from "./components/admin-Components/Crud";
import Add from "./components/admin-Components/Add";
import Delete from "./components/admin-Components/Delete";
import Update from "./components/admin-Components/Update";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavLink className="headline" to="/">
          <p className="headline">
            HEBESTREIT<br></br>IMMOBILIEN
          </p>
        </NavLink>
        <Navigation />
      </header>
      <main className="App__content">
        <ScrollMemory />
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
          <Route path="/Details/:ID">
            <Details />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/crud">
            <Crud />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/delete">
            <Delete />
          </Route>
          <Route path="/update">
            <Update />
          </Route>
          <Route path="/">
            <HomePage to="/home" />
          </Route>
        </Switch>
      </main>
      <footer>
        <Switch>
          <Route exact path={["/about", "/contact", "/", "/login"]}>
            <Footer />
          </Route>
        </Switch>
      </footer>
    </div>
  );
}

export default App;
