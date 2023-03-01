import imgPaysage7 from "../images/paysage7.webp";
import imgMaison1 from "../images/imgMaison.webp";
import imgArbre2 from "../images/imgArbre2.webp";

function Nettoyage() {
  return (
    <div className="container">
      <h2>Nettoyage et harmonisation lieu de vie</h2>
      <img src={imgPaysage7} alt="cabane au bord du lac" />
      <h3>
        Vous n'êtes pas à l'aise dans votre lieu de vie, vous ressentez de
        l'oppression etc. Un travail énergétique et chamanique de nettoyage et
        de reconnexion peut vous être proposé.
      </h3>
      <div className="separation"></div>
      <p>
        Cela consiste à travailler sur la vibration actuelle du lieu. Faire
        monter ce qui doit être (ancienne énergie, mémoires, esprits
        indésirables etc).
      </p>
      <div className="separation"></div>
      <h3>Un nettoyage de printemps</h3>
      <img src={imgMaison1} alt="maison avec jardin" />
      <p>
        Nous venons nettoyer, corriger et harmoniser avec le travail énergétique
        et chamanique. Une fois cela fait, un autre travail commence. C'est de
        faire monter vibratoirement le lieu (de le consacrer) de réactiver des
        points sur le terrain si cela est nécessaire et de venir adapter et
        stabiliser l'énergie correspondante pour les personnes et l'habitat.
      </p>
      <div className="separation"></div>
      <h3>
        Crée un lieu de guérison, d'harmonie et de ressourcement sur le long
        terme pour vous c'est possible.
      </h3>
      <img src={imgArbre2} alt="arbres dans foret" />
      <p>
        Déplacement dans toute la région Toulousaine, Tarn et alentours pour
        intervenir avec un ami thérapeute.
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

export default Nettoyage;
