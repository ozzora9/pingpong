import React, { useState } from "react";

const CardLarge = ({
  subtitle,
  title,
  note,
  imgLg,
  imgSm,
  type,
  active,
}) => {
  const [isActive, setIsActive] = useState(active);

  const onClickCard = (e) => {
    setIsActive(!isActive);
  };

  if (isActive) {
    return (
      <div
        onClick={onClickCard}
        className={`card-large card-collapse card-${type}`}
      >
        <div className="collapse-txt">
          <div className="txt-radius">
            <p>{subtitle}</p>
          </div>
          <div className="card-sub-title">{title}</div>
          <div className="card-note">{note}</div>
        </div>
        <div className="collapse-img">
          <img style={{ display: "flex" }} src={imgLg} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={onClickCard}
        className={`card-large card-primary card-${type}`}
      >
        <div className="primary-txt">
          <h2 className="card-note">{title}</h2>
        </div>
        <div className="primary-img">
          <img src={imgSm} alt="" />
        </div>
      </div>
    );
  }
};

export default CardLarge;
