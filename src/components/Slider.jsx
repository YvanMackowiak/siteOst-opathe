import React from "react";
import { useState } from "react";

const Slider = () => {
  const [slid, setSlid] = useState(false);
  const [slid1, setSlid1] = useState(true);
  const [slid2, setSlid2] = useState(true);
  const [slid3, setSlid3] = useState(true);

  const slider = (e) => {
    setSlid(!slid);
    setSlid1(!slid1);
  };
  const slider1 = (e) => {
    setSlid1(!slid1);
    setSlid2(!slid2);
  };
  const slider2 = (e) => {
    setSlid2(!slid2);
    setSlid3(!slid3);
  };
  const slider3 = (e) => {
    setSlid3(!slid3);
    setSlid(!slid);
  };
  return (
    <>
      <div className={`avis ${slid && "avis_actif"}`}>
        <p>
          " Très bonne expérience pour moi enceinte en 2020 avant mon accouchement puis par la suite avec mon bébé pour
          notre post accouchement. Maintenant mon fils a un an et demi, approche toujours aussi douce avec les enfants.
          Je recommande. "
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Rivia POULAIN-BRODIEN</p>
        <p>visité enJuin 2022</p>
        <div onClick={slider}>➡️</div>
      </div>{" "}
      <div className={`avis ${slid1 && "avis_actif"}`}>
        <p>
          " Infirmière, sportive et dynamique, mon corps est mis a rude épreuve Je ne peut que recommander Maxime qui
          m’a remise d’aplomb ! Petits plus constatés : Rdv facile a obtenir via doctolib , plusieurs créneaux Praticien
          a l’écoute des besoins, dispense des gestes précis et doux dans le respect de la pudeur, j’ai bénéficié de
          conseils adaptés lors de la séance. Salle de soins chauffée, lumineuse, agréable Salle d’attend agréable
          spacieuse Hygiène des locaux top Facile de se garer devant le cabinet Je recommande sans hésitation "
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>Durand Magalie</p>
        <p>visité en Novembre 2021</p>
        <div onClick={slider1}>➡️</div>
      </div>
      <div className={`avis ${slid2 && "avis_actif"}`}>
        <p>
          " Je trouve cet ostéopathe extrêmement compétent, il prends le temps et sait très bien écouter ..... j’y suis
          allé pour une douleur aux cervicales et ai été soulagée immédiatement. Je recommande "
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>julien corinne</p>
        <p>visité en Septembre 2020</p>
        <div onClick={slider2}>➡️</div>
      </div>
      <div className={`avis ${slid3 && "avis_actif"}`}>
        <p>
          " J'y suis allée sans grande conviction car j'avais déjà un ostéopathe compétent, et bien il est excellent et
          je pense que je vais en faire mon ostéo régulier "
        </p>
        <p>⭐⭐⭐⭐⭐</p>
        <p>valérie watine</p>
        <p>visité en Juin 2021</p>
        <div onClick={slider3}>➡️</div>
      </div>
    </>
  );
};

export default Slider;
