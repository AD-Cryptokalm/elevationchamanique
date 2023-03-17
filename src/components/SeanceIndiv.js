import imgTambour13 from "../images/imgTambour13.webp";
import imgPanthere from "../images/imgPanthere.jpeg";
import imgPaysage5 from '../images/imgPaysage5.jpeg'

function SeanceIndiv() {
  return (
    <div className="container">
      <h3>Soins chamaniques</h3>
      <div className="separation"></div>
      <h3>Soin de rééquilibrage et d'harmonisation</h3>
      <div className="cardPrice">60€ la séance</div>
      <div className="separation"></div>
      <h3>Qu’est ce que le soin chamanique peut vous apporter ?</h3>
      <p>
        Le soin s’adapte à la personne. Il va venir nettoyer,
        corriger, harmoniser et rééquilibrer, en fonction
        de ce que la personne a besoin au moment. Remonter vibratoirement et
        protéger en fin de séance. (Le fait de monter en vibration pendant le
        soin, peut amener des déblocages sur des situations de la vie. Elles
        seront plus fluides en général et l’individu subira moins l’anxiété
        quotidienne. Quelques exemples: La vie en société, le travail et se
        sentira plus en forme (regain d’énergie).
      </p>
      <img src={imgTambour13} alt="tambour chamanique" />
      <p>Le Tambour : Allié intime et monture du chamane pour sa pratique.</p>
      <div className="separation"></div>
      <h3>Extraction chamanique</h3>
      <div className="cardPrice">80€ la séance</div>
      <div className="separation"></div>
      <h3>Qu’est qu’une extraction chamanique ?</h3>
      <p>
        Le chamane avec l’aide de ses esprits alliés va venir identifier la
        cause. Cela peut être un déséquilibre sur les autres sphères plus
        subtiles. Un blocage émotionnel, des addictions (tabac et autres), une
        entité, de la magie noire etc… Les esprits savent ce dont la personne à
        besoin (ils travaillent à extraire la cause). Ensuite le praticien va
        remplir la zone extraite avec l’aide des esprits. On retire, donc
        forcément ce qui est vide doit forcément être rempli.
      </p>
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
        chèques. <br/>Bonne réception.
      </p>
      <div className="separation"></div>
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux sociaux ou
        par téléphone.
      </h4>
    </div>
  );
}

export default SeanceIndiv;
