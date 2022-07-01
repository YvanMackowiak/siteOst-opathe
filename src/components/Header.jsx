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
      <div className="navbar_logo">
        <span className="h1">
          <h1 className="h1">Ostéopathe </h1> Nicolaieff
        </span>
      </div>
      <ul className="navbar_links" onClick={handleShowLinks}>
        <li className="navbar_item slideInDown-1">
          <Link to="/" className="navbar_link">
            Accueil
          </Link>
        </li>

        <li className="navbar_item slideInDown-2">
          <Link to="/Partenaire" className="navbar_link">
            Partenaire
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link to="/Faq" className="navbar_link">
            FAQ
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link to="/TarifsetRemboursements" className="navbar_link tetr">
            Tarifs & Remboursements
          </Link>
        </li>
        <li className="navbar_item slideInDown-4">
          <Link to="/Urgence" className="navbar_link">
            Urgence
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
