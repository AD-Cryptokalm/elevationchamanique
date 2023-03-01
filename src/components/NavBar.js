import "../style/navBar.css";
import image1 from "../images/logo8.webp";

import React, { useState } from "react";
import MenuSlide from "./MenuSlide";

function NavBar() {
  const [toogleMenuSlider, setToogleMenuSlider] = useState(false);
  const handleClick = () => {
    toogleMenuSlider ? setToogleMenuSlider(false) : setToogleMenuSlider(true);
  };

  return (
    <nav className="navBar">
      <div className="navBar-logo">
        <div className="imga">
          <img src={image1} alt="logo entreprise" />
        </div>
        <div className="blockNameCall">
          <a href="/">
            <h1>Elévation Chamanique</h1>
            <span>Benjamin LAFFORGUE</span>
          </a>
          <a href="tel:+33649543610" className="blockCall">
            <i className="fa-solid fa-phone iconPhone"></i>
            <p>06.49.54.36.10</p>
          </a>
        </div>
      </div>
      <div className="navBar-menu" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {toogleMenuSlider && <MenuSlide />}
    </nav>
  );
}

export default NavBar;
