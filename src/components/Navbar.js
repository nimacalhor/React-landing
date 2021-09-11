import React from "react";

import { Link } from "react-router-dom";

import st from "./Navbar.module.css";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <header className={st.header}>
        <div className={st.list_ontainer}>
          <ul className={`${st.link_lists} mt-3`}>
            <li>
              {" "}
              <Link to="/">Home page</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/products">Products</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about_us">About us</Link>{" "}
            </li>
          </ul>
        </div>

      {/*logo ===============================*/}
      <div className={st.logo}>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
