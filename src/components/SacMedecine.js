import imgSac from "../images/sac2.jpg";

function SacMedecine() {
  return (
    <div className="container">
      <h2>Sacs Médecine</h2>
      <h3>A partir de 20€</h3>
      <img src={imgSac} alt="sac médecine en cuir" />
      <h3>
        Nos sacs médecines en cuir sont uniques et sont réalisés à la main
      </h3>
      <p className="description">
        Quel bienfait peut vous apporter un sac médecine en plus des soins ?
        <br />
        Il vous apportera un support de soins en plus, car ils sont travaillés
        spirituellement avant, pendant et après. La personne peut repartir avec,
        après la séance si elle le désire et pourra ainsi bénéficier d'un
        travail d'intégration. Elle peut également rajouter des objets pour les
        placer dedans à son bon vouloir. Il est également possible de repartir
        seulement avec votre sac médecine sans recevoir de soin en complément.
      </p>
      <p><a href="/soins_chamaniques">Visiter notre page de soins</a></p>
    </div>
  );
}

export default SacMedecine;
