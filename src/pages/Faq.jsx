import React from "react";
import "../styles/faq.scss";
import { Datafaq } from "../components/Datafaq.js";
import Accordion from "../components/Accordion";

const Faq = () => {
  return (
    <div className="accordions main">
      {Datafaq.map((item, index) => {
        console.log(item);
        return (
          <>
            <Accordion title={item.question} content={item.reponse} key={index} />
          </>
        );
      })}
    </div>
  );
};

export default Faq;
