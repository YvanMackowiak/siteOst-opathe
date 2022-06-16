import React from "react";
import "../styles/faq.scss";
import { Datafaq } from "../components/Datafaq.js";
import Accordion from "../components/Accordion";

const Faq = () => {
  return (
    <>
      <div className="main">
        <p className="accordions spetch">
          <h2>Vous avez des questions sur l’Ostéopathie ?</h2>
          Quelles sont les différences entre Ostéopathe, Kinésithérapeute et Chiropracteur? L’Ostéopathie est-t-elle
          remboursée? Faut-il voir son médecin avant de consulter un Ostéopathe? La plupart des réponses à ces questions
          se trouvent sur cette page. Néanmoins, si vous avez des questions plus précises, n’hésitez pas à nous
          contacter grâce au formulaire prévu à cet effet. Nous prendrons alors le temps de vous répondre dans les plus
          brefs délais.
        </p>
        <div className="accordions ">
          {Datafaq.map((item, index) => {
            return (
              <>
                <Accordion title={item.question} content={item.reponse} key={index} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
