import React from "react";
import { Route, Switch } from "react-router";

import Navbar from "./components/Navbar.js";
import Home from "./views/Home.js";
import Products from "./views/Products.js";
import AboutUs from "./views/AboutUs.js";

const App = () => {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default App;
