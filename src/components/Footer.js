

function Footer() {
  return (
    <div className='container-footer'>
      <div className='footer'>
        <ul className='footer-informations'>
            <li className="title-list">INFORMATIONS</li>
            <li><a href="/about">A Propos</a></li>
            <li><a href="/conditions-generales">Conditions Générales de Vente</a></li>
            <li><a href="https://www.jerome-bouin-lapidaire.fr">Partenaires: Jérôme BOUIN Lapidaire</a></li>
        </ul>
        <ul className="footer-adress">
            <li className='title-list'>ADRESSE</li>
            <li>820 Chemin de Fompigasse</li>
            <li>31620 BOULOC</li>
            <li><a href="tel:+33649543610"> Tel: 06.49.54.36.10</a></li>
        </ul>
        <ul className="footer-contact">
            <li className='title-list'>CONTACT</li>
            <li><i className="fa-brands fa-instagram"></i><a href="/">Instagram</a></li>
            <li><i className="fa-brands fa-facebook"></i><a href="https://www.facebook.com/BenjaminLaff">Facebook</a></li>
            <li><i className="fa-regular fa-envelope"></i><a href="/contact">Mail</a></li>
        </ul>
      </div>
      <div className="droits">
        <p>Tous droits réservés copyright © 2023 Nicolas Houliat</p>
      </div>
    </div>
  )
}

export default Footer