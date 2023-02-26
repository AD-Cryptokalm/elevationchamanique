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
        <li className="datesSejour-link">Weekend du 31 Mars,1 et 2 Avril</li>
        <li className="datesSejour-link">Weekend du 14, 15 et 16 Avril</li>
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
        280€/pers. Supplément cuir pour mayoche 20 euros
      </div>
      <div className="separation"></div>
      <p>
        Séjour de fabrication de tambours{" "}
        <span className="alert">avec peau et cadre de tambour fournis</span> :
      </p>
      <div className="cardPrice">
        -Tambour en peau de cerf :<div>35cm: 380€/pers</div>
        <div>40cm: 400€/pers</div>
        <div>43-45cm: 420€/pers</div>
        <div>53cm: 450€/pers</div>
      </div>
      <div className="cardPrice">
        -Tambour en peau de bison :<div>35cm: 400€/pers</div>
        <div>40cm: 420€/pers</div>
        <div>43-45cm: 440€/pers</div>
        <div>53cm: 480€/pers</div>
      </div>
      <div className="separation"></div>
      <h4>
        Tailles pour tambours et essences disponible selon stocks sur le moment
        :
      </h4>
      <p>Hêtre, frêne ou sycomore en 35, 40, 43, 45 et 53 cm.</p>
      <img src={imgPaysage3} alt="paysage de montagne" />
      <div className="separation"></div>
      <h4>Quel est le déroulement de ce séjour ?</h4>
      <p>
        Début du premier jour 17h00 (ou bien plus tôt ou plus tard, tout
        dépendra de ce qui à été prévu en amont avec vous) arrivée la veille en
        fin de journée. (Durée environ 2h). Durant ce premier jour lors de votre
        arrivée, vous allez être amené à travailler en connexion avec vos
        esprits alliés (pour choisir la peau). Ensuite elle sera mise à tremper
        toute la nuit.
        <br />
        Pour la seconde journée vous choisirez le cadre en bois massif et vous
        serez guidé pour commencer à créér le tambour tout au long de la
        journée.
        <br />
        Le lendemain le tambour restera en repos, pendant quelques heures nous
        le laisserons travailler. Nous irons en Forêt recevoir le bois qui vous
        servira pour confectionner la Mayoche avec le cuir. En fin de journée
        nous consacrerons le tambour et la Mayoche. La naissance a lieu et vous
        recevez votre tambour pour prendre part à l’élévation.
      </p>
      <div className="cardPrice">
        <div>Vendredi : 17h-19h</div>
        <div>Samedi : 9h-17h</div>
        <div>Dimanche : 10h-17h</div>
        <div>Horaires pouvant varier</div>
        <div>Possibilité de venir réaliser votre tambour en semaine</div>
      </div>
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux sociaux ou
        par téléphone.
      </h4>
    </div>
  );
}

export default SejourFab;
