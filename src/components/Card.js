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
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  counterState = () =>
    this.state.counter === 0 ? "badge bg-secondary" : "badge bg-info";
  downActive = () =>
    this.state.counter === 0 ? "text-secondary" : "text-danger";

  // __________________________________________________________________________________________________

  flexButton = "d-flex flex-wrap justify-content-between align-content-center";

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
          <h5 className={st.card_title}>{title}</h5>

          <div className={(st.card_text_small, this.flexButton)}>
            <p className={st.card_price}>
              {price}$
              {(counter != 0) && (
                <span className="text-muted">
                  {`* ${counter} = `}
                  {<span className="h6">{counter * price}$</span>}
                </span>
              )}
            </p>

            <div>
              <i
                onClick={this.downCounter}
                className={`bi bi-arrow-down-circle-fill m-1 ${this.downActive()}`}
              ></i>
              <span className={this.counterState()}>{counter}</span>
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
