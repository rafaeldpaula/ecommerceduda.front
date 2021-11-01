import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkout, Carrinho, Home } from "./Pages/index";
import ad1 from "./images/adMaterials/ad1.jpg";
import ad2 from "./images/adMaterials/ad2.jpg";
import ad3 from "./images/adMaterials/ad3.jpg";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/carrinho">
            <Carrinho />
          </Route>
          <Route path="/">
            <Home adMaterials={adMaterialsCarousel} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const adMaterialsCarousel = [
  {
    title: "Dahra Cristina",
    image: ad1,
    link: "/",
  },
  {
    title: "Bonito",
    image: ad2,
    link: "/",
  },
  {
    title: "Medicos",
    image: ad3,
    link: "./",
  },
];
