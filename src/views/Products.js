import React, { Component } from 'react';
import axios from 'axios';


class Products extends Component {
    constructor(){
        super();
        this.state = {
            post: this.data.slice(0, 10)
        }
    }

    // Data________________________________________________________________________________________
    data = []
    // Mounted_____________________________________________________________________________________
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.data = response.data)
    }
    render() {
        return (
            <div>
                <h1> this is produts page </h1>
            </div>
        );
    }
}

export default Products;
