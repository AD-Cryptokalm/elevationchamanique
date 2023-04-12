import imageFab from "../images/imgFab1.webp";
import imgPaysage3 from "../images/paysage3.jpeg";

function SejourFab() {
  return (
    <div className="container">
      <h3>Séjour de fabrication</h3>
      <img
        src={imageFab}
        alt="matière premièrer pour fabrication de tambour chamanique"
      />
      <h4>Dates disponibles 2023 pour les séjours de fabrication :</h4>
      <ul className="datesSejour-links">
        {/* <li className="datesSejour-link">Weekend du 31 Mars,1 et 2 Avril</li> */}
        <li className="datesSejour-link">14, 15 et 16 Avril (complet)</li>
        <li className="datesSejour-link">Weekend du 5, 6 et 7 Mai</li>
        <li className="datesSejour-link">Weekend du 19, 20 et 21 Mai</li>
        <li className="datesSejour-link">Weekend du 9, 10 et 11 Juin</li>
        <li className="datesSejour-link">Weekend du 7, 8 et 9 Juillet</li>
      </ul>
      <p>
        Les séjours sont en petit comité maximum 2 personnes par séjour.
        D’autres dates seront mises en place. Si vous voulez venir réaliser
        votre tambour pendant un séjour ci dessus ou en semaine (date à mettre
        en place avec vous) n’hésitez pas à me contacter pour réserver votre
        place. Merci.
      </p>
      <div className="separation"></div>
      <h4>
        Séjour individuel ou duo de fabrication de tambours chamanique sur 2
        jours et demi:
      </h4>
      <p>
        Séjour de fabrication de tambours{" "}
        <span className="alert">
          en venant avec votre peau et votre cadre de tambour
        </span>{" "}
        :
      </p>
      <div className="cardPrice">
        260€/pers. Supplément cuir pour mayoche 20 euros
      </div>
      <div className="separation"></div>
      <p>
        Séjour de fabrication de tambours{" "}
        <span className="alert">avec peau et cadre de tambour fournis</span> :
      </p>
      <div className="cardPrice">
        <span className="alert">Tambour en peau de Cerf ou Bison :</span>
        <div>40cm: 360€/pers</div>
        <div>45cm: 380€/pers</div>
        <div>53cm: 400€/pers</div>
        <div>Hébergement non compris</div>
      </div>
      <div className="separation"></div>
      <h4>
        Tailles pour tambours et essences disponible selon stocks sur le moment
        :
      </h4>
      <p>Hêtre, frêne ou sycomore en 35, 40, 43, 45 et 53 cm.</p>
      <img src={imgPaysage3} alt="paysage de montagne" />
      <div className="separation"></div>

      <p>
        Le déroulement du séjour de fabrication fera place à la transmission.
        Chacune, chacun recevra ce dont il a besoin et repartira avec son
        tambour nouvellement né. Nous pouvons parler d'un séjour initiatique, où
        je vous accompagne pendant ces deux jours lors de la réalisation du
        tambour.
      </p>
      {/* <div className="cardPrice">
        <div>Vendredi : 17h-19h</div>
        <div>Samedi : 9h-17h</div>
        <div>Dimanche : 10h-17h</div>
        <div>Horaires pouvant varier</div>
        <div>Possibilité de venir réaliser votre tambour en semaine</div>
      </div> */}
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux
        sociaux ou par téléphone.
      </h4>
    </div>
  );
}

export default SejourFab;
