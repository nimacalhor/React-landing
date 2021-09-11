import React, { Component } from 'react';

import Banner from '../components/Banner.js';
import Cards from '../components/Cards.js';
import Form from '../components/Form.js';
import Album from '../components/Album.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Form />
                <Album />
            </div>
        );
    }
}

export default Home;
