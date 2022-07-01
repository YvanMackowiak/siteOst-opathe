import React from "react";
import "../styles/accueil.scss";
import cabiner from "../assets/img/cabinet.jpg";
import maxime from "../assets/img/patient-min.jpg";
import Slider from "../components/Slider";
import CallToAction from "../components/CallToAction";

const Accueil = () => {
  return (
    <>
      <img className="img_cabinet" src={cabiner} alt="cabinet d'ostéopathe" />
      <CallToAction />
      <div className=" main_accueil">
        <h2 className="saviez_vous">Le saviez-vous ?</h2>
        <p className="saviez_vous_p">
          L’ostéopathie est une technique thérapeutique, apparue au XIXe siècle aux Etats-Unis. Fondée par le
          <a href="Dr Andrew Taylor Still " target="blank">
            {" "}
            Dr Andrew Taylor Still{" "}
          </a>
          sur des manipulations osseuses ou musculaires. La pensée première étant de considérer, que le bien-être du
          corps humain passait par le bon fonctionnement de son appareil locomoteur. Envie d'en savoir plus ?
          <a className="rdv" href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff" target="blank">
            {" "}
            Prenez rendez-vous !
          </a>
        </p>
        <div className="formation">
          <div className="container_vision">
            <p>
              {" "}
              Ostéopathe à Balma depuis 2019 aprés une formation de 5 ans au
              <a href="https://www.cso-toulouse.fr/" target="blank">
                {" "}
                conservatoire supérieur d'ostéopathie
              </a>
              , je vous accueille du lundi au samedi au sein du cabinet.
            </p>
            <p className="vision">
              La vision que j'ai de l'ostéopathie est d'apporter aux patients un équilibre à leur corps et du bien-être.
              Pour une meilleure santé, l'ostéopathie intervient sur tout type de personnes, de la naissance (dont je me
              suis spécialisé) jusqu'à la fin de vie. Tous ces aspects de mon métier me font l'aimer. C'est pourquoi
              j'interviens régulièrement chez les séniors, dans des établissements spécialisés.
            </p>
            <p className="vision">
              Le cabinet est idéalement situé au centre vile de Balma (8 Rte de Mons, 31130 Balma) accesible en
              transport en commun comme en voiture celui-ci dispose d'un grand parking adjacent j'aurais le plaisir de
              vous recevoir du lundi au samedi de 11h a 19h sur rendez-vous pour les personne ne pouvant pas se deplacer
              j'effectue egalement des deplacement a domicile merci de me contacter directement.
            </p>
          </div>
          <div className="image_osteo">
            <img className="tests" src={maxime} alt="Ostéopathe Maxime Nicolaieff" />
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Accueil;
