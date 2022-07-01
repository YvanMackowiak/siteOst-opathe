import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import Accueil from "./pages/Accueil";
import MentionLegal from "./pages/MentionLegal";
import Error from "./pages/Error";
import Header from "./components/Header";
import VotreOsteopathe from "./pages/VotreOsteopathe";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import Faq from "./pages/Faq";
import Urgence from "./pages/Urgence";
import TarifsetRemboursements from "./pages/TarifsRemboursements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/TarifsetRemboursements" element={<TarifsetRemboursements />} />
          <Route path="/MentionLegal" element={<MentionLegal />} />
          <Route path="/*" element={<Error />} />
          <Route path="/VotreOsteopathe" element={<VotreOsteopathe />} />
          <Route path="/Partenaire" element={<DevenirPartenaire />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/Urgence" element={<Urgence />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
