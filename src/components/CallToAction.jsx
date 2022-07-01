import React from "react";
import { Link } from "react-router-dom";

import phone from "../assets/img/mobil.png";
import home from "../assets/img/home.png";
import suit from "../assets/img/suit.png";
import urgence from "../assets/img/urgence.png";

import "../styles/calltoaction.scss";

const CallToAction = () => {
  return (
    <div className="container_call">
      <a className="test5" href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff" target="blank">
        <div className="bule phone">
          <div className="test">
            <img className="img_phone" src={phone} alt="telephone portable " />
          </div>
          <h3>Rdv Ostéopathie</h3>
          <p>
            Disponible du lundi au samedi <br /> horaires 11h / 19h
          </p>
        </div>
      </a>
      <a href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff" target="blank">
        <div className=" bule home">
          <div className="test">
            <img className="img_home" src={home} alt="localisatin " />
          </div>
          <h3>Ostéopathe a domicile</h3>
          <p>
            Séance d'osteopathie à domicile <br /> sur Balma et proche banlieue
          </p>
        </div>
      </a>
      <Link to="/Partenaire">
        <div className=" bule suit">
          <div className="test">
            <img className="img_suit" src={suit} alt="costume " />
          </div>
          <h3>Ostéopathe entreprise</h3>
          <p>Traitement et prevention des troubles musculo-squelettiques</p>
        </div>
      </Link>
      <a href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff">
        <div className=" bule urgence">
          <div className="test">
            <img className="img_urgence" src={urgence} alt="urgence " />
          </div>
          <h3>Urgences Ostéopathiques </h3>
          <p>
            Intervention de l'osteopathe <br />
            en urgence au domicile ou au cabinet
          </p>
        </div>{" "}
      </a>
    </div>
  );
};

export default CallToAction;
