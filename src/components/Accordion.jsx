import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    setActive(!active);
  };
  return (
    <div>
      <div className={`accordion ${active && "active"}`}>
        <div className="accordion__title" onClick={handleToggle}>
          {title} <span className="accordion__icon"></span>
        </div>
        <div className="accordion__content">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
