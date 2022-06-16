import React from "react";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        {" "}
        <ul>
          <li>Maxime Nicolaieff</li>
          <li>nicolaieffmaxime@gmail.com</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>06 43 80 90 61</li>
          <li>8 Rte de Mons, 31130 Balma</li>
        </ul>
      </div>
      <div className="copyright">
        <a href="https://www.doctolib.fr/osteopathe/balma/maxime-nicolaieff" target="blank">
          Pour prendre rdv cliquez-ici !
        </a>
      </div>
      <div className="copyright">
        <a href="https://www.linkedin.com/in/yvan-mackowiak/" target="blank">
          &#169;copyright Mackowiak Yvan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
