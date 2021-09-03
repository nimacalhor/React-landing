import React, { Component } from "react";
import st from "./Form.module.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      formText: "hello im under the water",
    };
  }

  // FUNCTIONS________________________________________________________________________
  changeHndlr = (event) => {
    this.setState({
      formText: event.target.value,
    });
  };

  render() {
    const { formText } = this.state;
    return (
      <div className={st.form_container}>
        {/* big text _________________________*/}
        <div className={st.form_text}>
          <h3>serch whatever you want ...!</h3>
        </div>

        {/* Input ____________________________*/}
        <input
          className={(st.form_input, "form-control")}
          type="text"
          value={formText}
          onChange={this.changeHndlr}
        />
      </div>
    );
  }
}

export default Form;
