import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Instrument from "./components/Instrument";
import SejourFab from "./components/SejourFab";
import SeanceIndiv from "./components/SeanceIndiv";
import SeanceMassage from "./components/SeanceMassage";
import Contact from "./components/Contact";
import Nettoyage from "./components/Nettoyage";
import BackToTopButton from "./components/BackToTopButton";

function App() {

 



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/tambours_chamanique_et_hochets"
            element={<Instrument />}
          />
          <Route
            path="/sejour_fabrication_tambour_chamanique"
            element={<SejourFab />}
          />
          <Route
            path="/seance_individuelle_chamanique"
            element={<SeanceIndiv />}
          />
          <Route
            path="/seance_individuelle_massage_par_le_magnetisme"
            element={<SeanceMassage />}
          />
          <Route
            path="/nettoyage_et_harmonisation_lieu_de_vie"
            element={<Nettoyage />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BackToTopButton/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
