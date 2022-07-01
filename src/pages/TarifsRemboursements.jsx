import React from "react";
import "../styles/tarifs.scss";

import dos from "../assets/img/dos.png";
import age from "../assets/img/enceinte.png";

const TarifsRemboursements = () => {
  return (
    <div className="main ">
      <div className="main_tarifs">
        <div className="tableau">
          <table>
            <thead>
              <tr>
                <th colspan="2">
                  <h2>Prix de la consultation</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consultation en cabinet</td>
                <td>55€</td>
              </tr>
              <tr>
                <td>Consultation à domicile</td>
                <td>70€*</td>
              </tr>
              <tr>
                <td>Tarifs Étudiants / CMU </td>
                <td>45€**</td>
              </tr>
              <tr>
                <td>Maman(Post-partum) + bébé</td>
                <td>90€</td>
              </tr>
              <tr>
                <td>Urgences / dimanches / jours fériés</td>
                <td>85€</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mode_paiement">
          <p className="mode_paiement_p">Votre ostéopathe reçoit les règlements par virements, espèces ou chèques.</p>
          <p className="mode_paiement_p">
            Je vous propose sur demande une facture qui permet une potentielle prise en charge par votre mutuelle
          </p>
        </div>
        <div className="mutuelle">
          <p>
            Bien que les consultations d'ostéopathies ne soient pas prises en charge par la Securité Sociale (cette
            absence de tarification de l'acte permet notament une prise en charge plus complète) il existe un grand
            nombre de mutelles qui prennent en charge totalement ou partiellement les séances d'ostéoapthie.
          </p>
          <p className="lien_mutuelle">
            Vous pouvez retrouver la liste des mutuelles{" "}
            <a href="https://www.osteopathie.org/mutuelles.html" target="blank">
              ici
            </a>
          </p>
        </div>

        <div className="image_tarif">
          <img className="img_tarif" src={dos} alt="diplome ostéopathie" />
          <img className="img_tarif" src={age} alt="diplome osétopathie femme enceinte" />
        </div>
        <p>*Tarifs pour les déplacements sur Balma et ses environs dans un maximum de 20km autour du cabinet</p>
        <p>**Sur présentation d'un justificatif à jour</p>
      </div>{" "}
    </div>
  );
};

export default TarifsRemboursements;
