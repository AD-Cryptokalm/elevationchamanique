import "../style/about.css";
import imagePaysage from "../images/paysage.webp";
import imageBison from "../images/bison.webp";
import imageArbre from "../images/BLarbre.webp"

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
      <img src={imagePaysage} alt="" />
      <p className="citation">
        "Empruntez votre route avec des amis ou des amours. Ils ne peuvent vous
        porter et inversement. Tout le monde peut marcher sinon la plupart vous
        prendrais pour un âne." <br />
        Un chamane.
      </p>
      <h3>Le saut dans l'inconnu:</h3>
      <p>
        Pour le futur chamane le saut se fera un jour ou l’autre. Il sera poussé
        par cette force indescriptible et descendra dans les profondeurs de ces
        réalités multiples qui l’habite. L’ego à ce moment là sera ébranlé, se
        disloquera et ce sera la mort de l’ancien personnage. Une nouvelle
        naissance émergera. Dans la nuit le porteur illuminera la pénombre. Un
        nouveau chemin s’offre à lui avec une nouvelle conscience. L’apprenti
        chamane sera confronté à une forme d’acceptation et d’abandon de ce
        nouvelle état d’être. Le cycle est renouvelé à neuf. L’inconnu prend
        tout son sens et dévient le connu. L’obscurité devient éclairée. À l’Est
        la naissance du nouvel individu est maintenant accomplie. Le chamane est
        né des profondeurs.
      </p>
      <img src={imageBison} alt="" />
      <p className="citation">
        "Le jour où tu prends conscience de ton enveloppe, qui en réalité ne
        reflète pas ce que tu es, mais que tu prends conscience de ta profondeur
        intérieure, tu t’ouvrira comme une fleur éclatante, pleine de lumière et
        de vitalité."
      </p>
      <p className="remerciment">Benjamin LAFFORGUE. Merci et bonne visite</p>
      <img className="arbreimg" src={imageArbre} alt="" />
    </div>
  );
}

export default About;
