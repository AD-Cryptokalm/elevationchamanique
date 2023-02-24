import imgMassage from "../images/imgMassage.jpeg";
import imgLotus from "../images/imgLotus.jpeg";

function SeanceMassage() {
  return (
    <div className="container">
      <h3>Séance individuelle de massage par le magnétisme</h3>
      <img src={imgMassage} alt="massage du dos" />
      <div className="separation"></div>
      <h3>Séance de massage</h3>
      <div className="cardPrice">50€ la séance</div>
      <div className="cardPrice">45min à 1h</div>
      <div className="separation"></div>
      <h3>
        Quel bienfaits peut vous apporter une séance de massage avec le
        magnétisme ?
      </h3>
      <p>
        L’apport du massage pendant la séance sera de soulager les douleurs et
        dénouer les tensions. Par impositions des mains, le fluide magnétique
        circule et travaille sur de grandes zones (dos) ou petites zones ciblées
        (cervicales, trapèzes, milieu du dos et lombaires). Exemple : massage et
        ensuite dans la continuité impositions des mains et en fin de séance
        possibilité de travailler avec le pendule aussi sur zone ciblées. Une
        huile neutre sera utilisée avec des huiles essentielles qui seront
        sélectionnées au tout début de la séance si la personne le désire.
      </p>
      <h3>On peut parler plus de massage intuitif.</h3>
      <p>
        Ensuite il se peut que le massage et le soin de magnétisme que vous
        recevez continuent de travailler sur les jours suivants. Exemple :
        dénouer les tensions, les douleurs et travailler au niveau des émotions.
      </p>
      <img src={imgLotus} alt="fleur de lotus" />
      <div className="separation"></div>
      <h3>
        Vous avez besoin d’être soulagé au niveau des douleurs et des tensions,
        vous pouvez si vous le désirez prendre rendez-vous pour un massage avec
        magnétisme en présentiel.<br/>À bientôt.<br/>Benjamin.
      </h3>
      <div className="separation"></div>
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux sociaux ou
        par téléphone.
      </h4>
    </div>
  );
}

export default SeanceMassage;
