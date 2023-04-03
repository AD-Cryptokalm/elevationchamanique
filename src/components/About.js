import "../style/about.css";
import imagePaysage from "../images/paysage.webp";
import imageArbre from "../images/BLarbre.webp";

function About() {
  return (
    <div className="container about">
      <h2>A Propos</h2>
      <h3>Pourquoi le chamanisme les tambours et les soins ?</h3>
      <p>
        Des reconnexions avec de la pratique qui ont amené un équilibre et qui
        aujourd’hui font partie intégrante de cette vie riche en enseignements.
        Par la suite cela amène à transmettre un support/allié pour les
        personnes qui souhaitent évoluer et qui contribueront à l’élévation avec
        le coeur et la lumière. Pour la partie soin chamanique, la force
        vibratoire qui sera déployée pendant les séances d’extractions et
        autres, vous permettra d’aller plus loin vers des déblocages et un mieux
        être. La parole (vivante) est puissante aussi et peut vous amener à
        conscientiser se dont vous avez besoin. (Prenons un exemple : Pensez
        vous qu’un moine qui médite des heures tous les jours ne fait rien ?)
        Comprenne qui pourra. À méditer.
      </p>
      <img src={imagePaysage} alt="couché de soleil" />
      <div className="separation"></div>
      <p className="citation">
        "La lumière arrivera toujours à se frayer un chemin en pleine obscurité.
        Quand la puissance est utilisée correctement, la naissance de la sagesse
        émerge. L'homme lumière est née et peut maintenant marcher en
        plénitude." <br />
        Un chamane.
      </p>
      <div className="separation"></div>
      <p className="remerciment">Benjamin LAFFORGUE. Merci et bonne visite</p>
      <img className="arbreimg" src={imageArbre} alt="Benjamin LAFFORGUE" />
    </div>
  );
}

export default About;
