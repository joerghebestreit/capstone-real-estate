import "./App.css";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import EstatePage from "./components/EstatePage";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import { NavLink } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const location = useLocation();

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
          <Route path="/Details/:ID" >
            <Details />
          </Route>
          <Route path="/">
            <HomePage to="/home" />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
