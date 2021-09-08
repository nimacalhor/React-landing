import React from 'react';
import Navbar from "./components/Navbar.js";
import Banner from './components/Banner.js';
import Cards from './components/Cards.js';
import Form from './components/Form.js';
import Album from './components/Album.js';


const App = () => {
  return (
    <main>
      <Navbar />
      <Banner />
      <Cards />
      <Form />
      <Album />
    </main>
  );
};

export default App;