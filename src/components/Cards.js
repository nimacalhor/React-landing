import React, { Component } from "react";
import { v4 } from "uuid";

import st from "./Cards.module.css";
import Card from "./Card";

// images______________________________
import FrstImg from "../assets/1.jpg";
import SecondImg from "../assets/2.jpg";
import ThirdImg from "../assets/3.jpg";
import FifhImg from "../assets/4.jpg";
// ____________________________________

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "Livan messi",
          image: FrstImg,
          price: 450,
        },
        {
          title: "Whole lotta",
          image: SecondImg,
          price: 780,
        },
        {
          title: "bloom",
          image: ThirdImg,
          price: 550,
        },
        {
          title: "paranoid",
          image: ThirdImg,
          price: 885,
        },
        {
          title: "uniCorn",
          image: FifhImg,
          price: 930,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className={st.cards_container}>
        {products.map((item) => (
          <Card key={v4()} image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
    );
  }
}

export default Cards;
