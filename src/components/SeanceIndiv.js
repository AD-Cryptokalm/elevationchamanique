import imgPanthere from "../images/panthere.jpg";
import imgPaysage5 from "../images/imgPaysage5.jpeg";

function SeanceIndiv() {
  return (
    <div className="container">
      <h3>Soin chamanique</h3>
      <div className="cardPrice">70€ la séance</div>
      <div className="separation"></div>
      <p>
        Le soin s’adapte à la personne. Il va venir nettoyer, corriger,
        harmoniser et rééquilibrer, en fonction de ce que la personne a besoin
        au moment. Le soin va venir nettoyer plus en profondeur si besoin. Par
        exemple, le dégagement d'un gros blocage émotionnel, d'une entité, une
        situation toxique etc...
        <br />
        Pendant la séance la personne bénéficie aussi d'une remontée d'energie
        et d'une protection (remonter vibratoirement). Le fait de monter en
        vibration pendant le soin peut amener des déblocages sur des situations
        de la vie. Elles seront plus fluides en général et l’individu subira moins
        l’anxiété quotidienne. Quelques exemples: La vie en société, le travail
        et se sentira plus en forme (un regain d’énergie peut se faire sentir).
      </p>
      {/* <p>
        <a href="/sac_medecine">Découvrer aussi nos sacs médecine</a>
      </p> */}
      <div className="separation"></div>
      <img src={imgPanthere} alt="panthere noire" />
      <div className="separation"></div>
      <h3>Les séances sont un moment de partage et d’écoute.</h3>
      <h4>
        Libre à vous ensuite d’arroser les graines qui sont transmises. Personne
        ne peut les faire germer à votre place, c’est à vous de vous ouvrir. Un
        suivi peut être conseillé, tout dépendra du travail sur les semaines et
        les mois qui suivront. Bien sûr vous êtes libre de vos choix.
      </h4>
      <div className="separation"></div>
      <img src={imgPaysage5} alt="couché de soleil" />
      <p>
        Les soins sont sur rendez-vous et s’effectuent en cabinet en présentiel.
        Quelques fois en forêt, tout dépend du déroulement de la séance et
        possibilité aussi de travailler à distance. Le travail peut s’effectuer
        avec les mains, au pendule, avec le tambour chamanique ou avec le hochet
        chamanique. Pour les soins à distance, un paiement par virement bancaire
        vous sera demandé avant d’effectuer le soin. Je ne prend pas les
        chèques. <br />
        Bonne réception.
      </p>
      <div className="separation"></div>
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux
        sociaux ou par téléphone.
      </h4>
    </div>
  );
}

export default SeanceIndiv;
