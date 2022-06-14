import React from "react";
import "../styles/header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar_link">
            Accueil
          </Link>
        </li>
        <li className="navbar_item slideInDown-2">
          <Link to="/VotreOsteopathe" className="navbar_link">
            Votre ostéopathe
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link to="/Partenaire" className="navbar_link">
            Devenir Partenaire
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link to="/Faq" className="navbar_link">
            FAQ
          </Link>
        </li>
        <li className="navbar_item slideInDown-5">
          <Link to="/Contact" className="navbar_link">
            Contact
          </Link>
        </li>
        <li className="navbar_item slideInDown-6">
          <Link to="/TarifsetRemboursements" className="navbar_link">
            Tarifs & Remboursements
          </Link>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Header;
