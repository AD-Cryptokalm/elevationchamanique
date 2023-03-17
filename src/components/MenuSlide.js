import "../style/menuSlide.css";

function MenuSlide() {
  return (
    <ul className="menuSlide">
      <li className="menuSlide-link" id="liTop">
        <a href="/about">A Propos</a>
      </li>
      <li className="menuSlide-link">
        <a href="/tambours_chamanique_et_hochets">
          Tambours et hochets chamaniques
        </a>
      </li>
      <li className="menuSlide-link">
        <a href="/sejour_fabrication_tambour_chamanique">Séjour fabrication</a>
      </li>
      <li className="menuSlide-link">
        <a href="/soins_chamaniques">
          Soins chamaniques
        </a>
      </li>
      {/* <li className="menuSlide-link">
        <a href="/sac_medecine">
          Sac médecine
        </a>
      </li> */}
      <li className="menuSlide-link">
        <a href="/seance_individuelle_massage_par_le_magnetisme">
          Massage avec magnétisme
        </a>
      </li>
      <li className="menuSlide-link">
        <a href="/nettoyage_et_harmonisation_lieu_de_vie">
          Nettoyage et harmonisation lieu de vie
        </a>
      </li>
      <li className="menuSlide-link" id="liBottom">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
}

export default MenuSlide;
