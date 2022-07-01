import React from "react";
import osté from "../assets/img/osté.jpg";
import "../styles/partenaire.scss";
import partenaire from "../assets/img/shaking-hands-g081dbd61e_1280.jpg";

const DevenirPartenaire = () => {
  return (
    <div className="main main_partenaire">
      <h2 className="partenaire_titre">Pourquoi devenir partenaire ?</h2>
      <div className="partenaire">
        <div className="partenaire_text">
          Ma vision du partenariat m’est venue d'un objectif : pouvoir aider les personnes qui n'ont pas d'accès facile
          aux soins ostéopathiques ... Tout a commencé par la demande d'une patiente. Son père vivant en EHPAD, il
          n'avait pas la possibilité de se déplacer et nous avons donc prodigué des soins directement sur place dans
          l’établissement. Vu les résultats que j’ai obtenu avec ce patient, je me suis dit que je pouvais apporter mon
          aide à d’autres personnes. Aujourd’hui, je me déplace directement chez mes patients, au sein des
          établissements qui les accueillent. De ce fait en regroupant les patients sur une journée cela me permet de
          leur faire profiter d’un tarif avantageux et de leur éviter ainsi un déplacement au cabinet qui pourrait être
          compliqué voire impossible pour certains de mes patients.
        </div>
        <div className="img_patenaire">
          <img className="partenaire_img" src={osté} alt="" />
        </div>
      </div>
      <div className="entreprise">
        <p className="entreprise_p">
          C’est cette envie d’aider qui me pousse aujourd’hui a vous proposer des partenariats. Que vous soyez une
          maison de retraite ou bien une entreprise (plus de deux salariés sur trois souffrent de problèmes de dos. En
          France, 20 % des accidents du travail sont liés à des lombalgies et entrainent un arrêt de deux mois en
          moyenne.) je vous propose des tarifs dégressifs et surtout une facilité pour vos équipes en me déplaçant avec
          le matériel nécessaire directement sur leur lieu de travail ou leur lieu de vie.
        </p>
        <div>
          <img className="main_img" src={partenaire} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DevenirPartenaire;
