import React, { Component } from "react";
import st from "./Card.module.css";

class card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  // Functions_____________________________________________
  upCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  downCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };
  // _______________________________________________________

  flexButton = "d-flex justify-content-between align-content-center";

  render() {
    const { image, title, price } = this.props;
    const { counter } = this.state;
    return (
      <div className={st.card_container}>
        {/* _____Image ________________________________________________*/}
        <div className={st.card_img_container}>
          <img
            className={(st.card_img, "img-fluid rounded-3")}
            src={image}
            alt={title}
          />
        </div>

        {/* _____Text ________________________________________________*/}
        <div className={(st.card_textarea, "p-2 pt-0 border")}>
          <h4 className={st.card_title}>{title}</h4>

          <div className={(st.card_text_small, this.flexButton)}>
            <p className={st.card_price}>{price}</p>
            <div>
              <i
                onClick={this.downCounter}
                className="bi bi-arrow-down-circle-fill m-1 text-danger"
              ></i>
              <span className="badge bg-info text-light">{counter}</span>
              <i
                onClick={this.upCounter}
                className="bi bi-arrow-up-circle-fill m-1 text-success"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;
