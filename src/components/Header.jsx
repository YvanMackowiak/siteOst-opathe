import React from "react";
import "../styles/header.scss";
import { useState } from "react";

const Header = () => {
  const [showLinks, setShowlinks] = useState(false);

  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar_logo"> Logo </div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a href="" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item slideInDown-2">
          <a href="" className="navbar_link">
            Votre ostéopathe
          </a>
        </li>
        <li className="navbar_item slideInDown-3">
          <a href="" className="navbar_link">
            Devenir Partenaire
          </a>
        </li>
        <li className="navbar_item slideInDown-4">
          <a href="" className="navbar_link">
            FAQ
          </a>
        </li>
        <li className="navbar_item slideInDown-5">
          <a href="" className="navbar_link">
            Contact
          </a>
        </li>
        <li className="navbar_item slideInDown-6">
          <a href="" className="navbar_link">
            Tarifs & Remboursements
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Header;
