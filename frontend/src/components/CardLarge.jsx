import React from "react";

const CardLarge = ({
  subtitle,
  title,
  note,
  imgLg,
  imgSm,
  type,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick} // 클릭 시 onClick 처리
      className={`card-large ${
        isActive ? "card-collapse" : "card-primary"
      } card-${type}`}
    >
      {isActive ? (
        <>
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
        </>
      ) : (
        <>
          <div className="primary-txt">
            <h2 className="card-note">{title}</h2>
          </div>
          <div className="primary-img">
            <img src={imgSm} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default CardLarge;
