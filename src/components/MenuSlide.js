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
        <a href="/seance_individuelle_chamanique">
          Séance individuelle chamanique
        </a>
      </li>
      <li className="menuSlide-link">
        <a href="/seance_individuelle_massage_par_le_magnetisme">
          Séance individuelle de massage par le magnétisme
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
