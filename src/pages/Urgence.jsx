import React from "react";
import "../styles/urgence.scss";
import map from "../assets/img/map.png";
import doctolib from "../assets/img/Logo-doctolib.svg.png";

const Urgence = () => {
  return (
    <div className="main">
      <div className="main_urgence">
        <h2 className="titre_urgence">Urgence ostéopathique qu’est-ce que c’est ?</h2>
        <p>
          Pour soulager les douleurs ou retrouver ses capacités à se déplacer, il faut une prise en charge ostéopathique
          dans les meilleurs délais. Dans le cas d’une urgence ostéopathique , il arrive que l’on ne puisse pas se
          déplacer du a une forte douleur. Une séance a domicile peut avoir lieu après une prise de rendez-vous.
        </p>
        <dl className="liste_urgence">
          <dt>Les causes les plus fréquente d’urgence en ostéopathie sont :</dt>
          <dd>-Douleurs lombaires : « bloqué» suite par exemple a une journée jardinage </dd>
          <dd>-Torticolis (douleurs du cou)</dd>
          <dd>
            -Toutes douleurs à la suite d’un traumatisme important (accident de la circulation, accident sportif…)
          </dd>
        </dl>

        <div className="map_rdv">
          <div className="map_blabla">
            <h3>Des rendez-vous week-end et jours fériés</h3>
            <p>
              Je vous recois en urgence au cabinet si vous pouvez vous deplacer ou je me deplace a votre domicile ou sur
              votre lieux de travail le tout dans un rayon de 20km autour du cabinet
            </p>
          </div>

          <img className="map" src={map} alt="map d'intervention a domicile" />
        </div>
        <div className="doctolib">
          <a href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff" target="blank">
            <img src={doctolib} alt="logo doctolib" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Urgence;
