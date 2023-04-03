import imgTambour1 from "../images/tambourImg1.webp";
import imgPaysage from "../images/paysage2.webp";
import imgHochet1 from "../images/hochetImg1.webp";
import imgHochet2 from "../images/hochetImg2.webp";
import imgHochet3 from "../images/hochetImg3.webp";
import imgTambour2 from "../images/tambourImg2.webp";
import imgTambour3 from "../images/tambourImg3.webp";
import imgTambour8 from "../images/imgTamb.webp";
import imgTambour9 from "../images/tambourImg9.webp";



function Instrument() {
  return (
    <div className="container">
      <h2>Tambours chamaniques et hochets</h2>
      <img src={imgTambour1} alt="tambour chamanique" id="img1" />
      <h3>Les peaux de cerf et bison viennent d’un artisan tanneur du Gers.</h3>
      <img src={imgPaysage} alt="paysage de montagne" id="img2" />
      <div className="separation"></div>
      <h4>
        "La nature fait les choses sans se presser et pourtant tout est
        accompli." <br />
        Lao Tseu.
      </h4>
      <div className="separation"></div>
      <h3>Hochet chamanique</h3>
      <h3>A partir de 60€</h3>
      <div className="blockImageHochet">
        <img src={imgHochet1} alt="hochet chamanique" id="img3" />
        <img src={imgHochet2} alt="hochet chamanique" id="img4" />
        <img src={imgHochet3} alt="hochet chamanique" id="img5" />
      </div>
      <p className="description">
        Exemple de réalisation de hochet chamanique. Peau de veau et bison
        (double médecine, veau féminin la terre et bison masculin le ciel).
        Longueur 40cm. Cuir de chèvre pour la poignée et bois de noisetier. Côté
        droit du noisetier blanc (masculin) et côté gauche avec l’écorce marron
        noir (féminin). Cuir blanc et rouge toute une symbolique. (Convient pour
        travailler sur les personnes, les lieux et cérémonies).
        <br /> Tarif : 80 €
      </p>
      <div className="separation"></div>
      <h3>Tambour cerf brut en 40cm (350€)</h3>
      <img src={imgTambour2} alt="tambour chamanique" id="img6" />
      <img src={imgTambour3} alt="tambour chamanique" id="img7" />
      <p className="description">
        Tambour 40cm en cerf brut. Cadre en frêne 7,5cm de profondeur. Mayoche
        en noisetier et cuir de cerf. Coriace !🦌
      </p>
      <div className="separation"></div>
      <h3>Tambour bouc en 40cm (400€)</h3>
      <img src={imgTambour8} alt="tambour chamanique" id="img12" />
      <p className="description">
        Tambour 40cm en peau de bouc. Cadre en frêne 7,5cm de profondeur.
        Tressage tout autour du tambour avec laces de bouc. Mayoche en chêne et
        cuir de chèvre. Tambour convenable pour le poids.
      </p>
      <img src={imgTambour9} alt="tambour chamanique" id="img13" />
      <p>Poignée en cuir de chèvre.</p>
      <h4 className="cardContact">
        Pour tout achat, réservation ou renseignement, merci de me joindre par
        mail via le <a href="/contact">formulaire de contact</a>, réseaux sociaux ou
        par téléphone.
      </h4>
    </div>
  );
}

export default Instrument;
