import React from "react";
import st from "./Banner.module.css";

import bannerImage from "../assets/landing.jpg";

const Banner = () => {
  return (
    <div className={st.banner}>
      <img src={bannerImage} alt="banner image" />

      {/*HEADING =============================================== */}

      <div className={st.heading}>
        <h1>Painting was the art most congenial to this age</h1>
        <p>
          Contribute to the growth of the art community by purchasing unique
          paintings at a reasonable price
        </p>
        {/* BUTTONS ==========================*/}
        <div className={st.buttons}>
          <button className={st.button_1}>contact us</button>
          <button className={st.button_2}>produts</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
