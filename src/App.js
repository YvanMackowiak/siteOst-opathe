import { BrowserRouter, Route, Routes } from "react-router-dom";

import Accueil from "./pages/Accueil";
import MentionLegal from "./pages/MentionLegal";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/MentionLegal" element={<MentionLegal />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
