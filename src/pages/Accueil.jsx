import React from "react";
import "../styles/accueil.scss";
import cabiner from "../assets/img/cabinet.jpg";
import maxime from "../assets/img/patient-min.jpg";

const Accueil = () => {
  return (
    <>
      <img className="img_cabinet" src={cabiner} alt="cabinet d'ostéopathe" />
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
          <div>
            soluta. Facilis, dignissimos. Consequatur, delectus atque. Cumque quae impedit fugit maxime recusandae
            temporibus quaerat eaque blanditiis debitis sint. Reprehenderit quis a, ab repellat reiciendis doloremque
            iste harum quia dolor in doloribus. Quia delectus odio ipsam rerum sit assumenda iusto quibusdam obcaecati
            ipsum consectetur laborum nostrum atque fuga totam exercitationem consequuntur, hic neque error, officia
            quasi eveniet alias deleniti. Dolorum, facere praesentium. Quisquam, nemo! Tenetur quo vel, odit voluptatum
            hic reprehenderit fugit est? Velit nemo aliquam earum atque expedita dicta quia blanditiis nihil ullam,
            eligendi, consequuntur aut hic veritatis optio, quis possimus. Magni inventore dolore soluta! Rem, ad esse.
            Sequi repellendus accusantium delectus repudiandae, tenetur dolore similique, distinctio a enim at
            doloremque dolores error obcaecati culpa consequatur libero ut, beatae molestiae quod. Inventore, sit est
            beatae perspiciatis modi et id consequatur mollitia unde error rerum consectetur aliquam. Veritatis ipsa
            nobis eveniet dignissimos, iure laudantium obcaecati laborum animi placeat. Provident in possimus veritatis.
            Animi error tenetur in recusandae? Corporis minus laudantium sunt illo ipsa unde consequuntur dolore ea
            officia ex quibusdam dolorem qui pariatur rem delectus vero vitae quo, libero est? Vitae, quaerat! Minima
            tenetur rem, cum voluptate unde rerum similique ipsam explicabo animi molestiae sunt in magni, vero
            temporibus. Commodi rerum nisi necessitatibus debitis! Velit sapiente placeat nobis minima quae deleniti
            aperiam. Repudiandae voluptate esse nobis dignissimos quos, quia numquam architecto ratione doloribus
            asperiores tempora veritatis ab aperiam atque odio laudantium inventore in provident beatae necessitatibus
            itaque veniam? Quaerat blanditiis ex molestiae.nobis eveniet dignissimos, iure laudantium obcaecati laborum
            animi placeat. Provident in possimus veritatis. Animi error tenetur in recusandae? Corporis minus laudantium
            sunt illo ipsa unde consequuntur dolore ea officia ex quibusdam dolorem qui pariatur rem delectus vero vitae
            quo, libero est? Vitae, quaerat! Minima tenetur rem, cum voluptate unde rerum similique ipsam explicabo
            animi molestiae sunt in magni, vero temporibus. Commodi rerum nisi necessitatibus debitis! Velit sapiente
            placeat nobis minima quae deleniti aperiam. Repudiandae voluptate esse nobis dignissimos quos, quia numquam
            architecto ratione doloribus asperiores tempora veritatis ab aperiam atque odio laudantium inventore in
            provident beatae necessitatibus itaque veniam? Quaerat blanditiis ex molestiae.
          </div>
          <div className="image_osteo">
            <img className="tests" src={maxime} alt="Ostéopathe Maxime Nicolaieff" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
