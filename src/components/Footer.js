

function Footer() {
  return (
    <div className='footer'>
        <ul className='footer-informations'>
            <li className="title-list">INFORMATIONS</li>
            <li><a href="/">A Propos</a></li>
            <li><a href="/">Mentions Légales</a></li>
            <li><a href="/">Conditions Générales de Vente</a></li>
            <li><a href="/">Partenaires</a></li>
        </ul>
        <ul className="footer-adress">
            <li className='title-list'>ADRESSE</li>
            <li>820 Chemin de Fompigasse</li>
            <li>31620 BOULOC</li>
            <li>Tel: 06.49.54.36.10</li>
        </ul>
        <ul className="footer-contact">
            <li className='title-list'>CONTACT</li>
            <li><i className="fa-brands fa-instagram"></i><a href="/">Instagram</a></li>
            <li><i className="fa-brands fa-facebook"></i><a href="/">Facebook</a></li>
            <li><i class="fa-regular fa-envelope"></i><a href="/">Mail</a></li>
        </ul>
    </div>
  )
}

export default Footer