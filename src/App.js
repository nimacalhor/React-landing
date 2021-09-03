import React from 'react';
import Navbar from "./components/Navbar.js";
import Banner from './components/Banner.js';
import Cards from './components/Cards.js';
import Form from './components/Form.js';


const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Cards />
      <Form />
    </main>
  );
};

export default App;