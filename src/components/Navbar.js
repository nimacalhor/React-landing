import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import st from "./Navbar.module.css";
import Logo from "../assets/logo.jpg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLink: React.createRef,
      aboutUsLink: React.createRef,
      productsLink: React.createRef,
    };
  }

  // Methods____________________________________________________________________________________________________________________
  giveActiveClass = (linkName) => {
    const el = this.state[linkName];
    el.classList.add(st.activeLi);
  };

  //Mounte_____________________________________________________________________________________________________________________

  render() {
    console.log(this.props);
    return (
      <header className={st.header}>
        <div className={st.list_ontainer}>
          <ul className={`${st.link_lists} mt-3`}>
            <li>
              {" "}
              <NavLink
                ref={this.state.homeLink}
                exact
                activeClassName={st.linkIsActive}
                to="/"
              >
                Home page
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                ref={this.state.productsLink}
                activeClassName={st.linkIsActive}
                to="/products"
              >
                Products
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink
                ref={this.state.aboutUsLink}
                activeClassName={st.linkIsActive}
                to="/about_us"
              >
                About us
              </NavLink>{" "}
            </li>
          </ul>
        </div>

        {/*logo ===============================*/}
        <div className={st.logo}>
          <img src={Logo} alt="logo" />
        </div>
      </header>
    );
  }
}

export default Navbar;
