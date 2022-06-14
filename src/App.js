import { BrowserRouter, Route, Routes } from "react-router-dom";

import Accueil from "./pages/Accueil";
import MentionLegal from "./pages/MentionLegal";
import Error from "./pages/Error";
import Header from "./components/Header";
import VotreOsteopathe from "./pages/VotreOsteopathe";
import DevenirPartenaire from "./pages/DevenirPartenaire";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import TarifsetRemboursements from "./pages/TarifsRemboursements";

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
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
