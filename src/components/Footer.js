function Footer() {
  return (
    <div className="container-footer">
      <ul className="footer-partenariat">
        <li className="title-list">PARTENARIAT:</li>
        <li>J.BOUIN Lapidaire</li>
        <li>
          <a
            href="https://www.jerome-bouin-lapidaire.fr"
            target="_blank"
            rel="noreferrer"
          >
            https://www.jerome-bouin-lapidaire.fr
          </a>
        </li>
      </ul>
      {/* <div className="separation"></div> */}
      <div className="footer">
        <div className="droits"></div>
        <ul className="footer-informations">
          <li className="title-list">INFORMATIONS</li>
          <li>
            <a href="/about" className="decoration-none">
              A Propos
            </a>
          </li>
          <li>
            <a href="/conditions-generales" className="decoration-none">
              Conditions Générales
            </a>
          </li>
        </ul>
        <ul className="footer-adress">
          <li className="title-list">ADRESSE</li>
          <li>820 Chemin de Fompigasse</li>
          <li>31620 BOULOC</li>
          <li>
            <a href="tel:+33649543610" className="decoration-none">
              {" "}
              <i className="fa-solid fa-phone iconPhone"></i>
              06.49.54.36.10
            </a>
          </li>
        </ul>
        <ul className="footer-contact">
          <li className="title-list">CONTACT</li>
          <li>
            <i className="fa-brands fa-instagram"></i>
            <a
              href="https://www.instagram.com/b.l.chamanisme"
              className="decoration-none"
            >
              Instagram
            </a>
          </li>
          <li>
            <i className="fa-brands fa-facebook"></i>
            <a
              href="https://www.facebook.com/BenjaminLaff"
              className="decoration-none"
            >
              Facebook
            </a>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <a href="/contact" className="decoration-none">
              Mail
            </a>
          </li>
        </ul>
      </div>
      <div className="droits">
        <p>Tous droits réservés copyright © 2023 Nicolas Houliat</p>
      </div>
    </div>
  );
}

export default Footer;
