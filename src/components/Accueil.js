import "../style/accueil.css";
import image2 from "../images/imgInfo4.png";
import image from "../images/logonb3.png";

function Accueil() {
  return (
    <div className="container">
      <img src={image} alt="dessin bison" className="imgLogoNb" />
      <h2>
        Bienvenue sur le site Elévation Chamanique
      </h2>
      <h3 className="detail-title">Fabrication et vente de tambours, séjours et stage</h3>
      <p>
        Voyagez au cœur de votre âme avec nos{" "}
        tambours chamaniques faits à la main et nos séances de
        soins individuelles. Nous sommes passionnés par la{" "}
        fabrication de tambours chamaniques de qualité, en
        utilisant des matériaux naturels soigneusement sélectionnés pour créer
        un son unique et harmonieux. Mais nous ne nous arrêtons pas là : nous
        sommes là pour vous guider dans votre propre voyage intérieur, en
        utilisant les rythmes et les vibrations de nos tambours pour vous aider
        à vous connecter à votre esprit, votre corps et votre environnement. Que
        vous cherchiez à vous libérer de blocages émotionnels, à trouver un sens
        plus profond dans votre vie, ou simplement à vous détendre et à vous
        connecter avec la nature, nous serons là pour vous accompagner.
        Découvrez notre sélection de tambours chamaniques et autres instruments
        sacrés, ainsi que nos séances de chamanisme{" "}
        individuelle personnalisées, et commencez votre voyage dès aujourd'hui.
        <br />
        Benjamin
      </p>
      <div className="accueil-info">
        <img src={image2} alt="tambours chamaniques" id="imgAccueil" />
        <div className="card-info">
          <h3>Informations</h3>
          <p>
            Les dates 2023 pour les prochains séjours de fabrication de tambours
            sont les weekends du 1 et 2 avril, 15 et 16 avril.
            Weekend du 6 au 7 mai. D’autres dates sont disponibles sur les mois
            suivants dans l’onglet{" "}
            <a href="/sejour_fabrication_tambour_chamanique">
              séjour de fabrication
            </a>
            . Vous pouvez me contacter par mail ou téléphone pour réserver votre
            séjour. Les places sont limitées à deux personnes par séjour
            maximum. Possibilité aussi que le séjour soit en individuel.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
