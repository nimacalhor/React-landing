import React, { Component } from 'react';
import st from './Cards.module.css'
import Card from './Card';


// images______________________________
import FrstImg from '../assets/1.jpg'
import SecondImg from '../assets/2.jpg'
import ThirdImg from '../assets/3.jpg'
import FifhImg from '../assets/4.jpg'
// ____________________________________



class Cards extends Component {
    render() {
        return (
            <div className={st.cards_container}>
                <Card image={FrstImg} title="Livan messi" price="450$" /> 
                <Card image={SecondImg} title="WHole lotta love" price="980$" /> 
                <Card image={ThirdImg} title="ThinkPad" price="43$" /> 
                <Card image={FifhImg} title="paranoid" price="1800$" /> 
            </div>
        );
    }
}

export default Cards;
