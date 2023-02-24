import "../style/navBar.css";
import image1 from "../images/imgNavBar.webp";

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
        <a href="/">
          <h1>Elévation Chamanique</h1>
          <span>Benjamin LAFFORGUE</span>
        </a>
      </div>
      <div className="navBar-menu" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </div>
      
      {toogleMenuSlider && <MenuSlide />}
      
    </nav>
  );
}

export default NavBar;

/* <p>
        Fabrication et vente d'instruments de musique chamanique mais également
        séjour de fabrication, séance chamanique et bien d'autres.
      </p> */
