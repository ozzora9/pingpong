import React, { useState } from "react";

const CardLarge = ({ subtitle, title, note, img, color, active }) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = (event) => {
    setIsActive(!isActive);
  };

  if (isActive) {
    return (
      <div
        onClick={handleClick}
        className="card-large card-collapse card-location"
        style={{ backgroundColor: color }}
      >
        <div className="collapse-txt">
          <div className="txt-radius">
            <p>{subtitle}</p>
          </div>
          <div className="card-sub-title">{title}</div>
          <div className="card-note">{note}</div>
        </div>
        <div className="collapse-img">
          <img style={{ display: "flex" }} src={img} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={handleClick}
        className="card-large card-primary"
        style={{ backgroundColor: color }}
      >
        <div className="primary-txt">
          <h2 className="card-note">{title}</h2>
        </div>
        <div className="primary-img">
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
};

export default CardLarge;
