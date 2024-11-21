import React from "react";

const CardSm = () => {
  return (
    <div className="card-box">
      <a href="/" className="card">
        <div className="card-info">
          <div className="card-title">자연도 소금빵</div>
          <div className="card-sub">인천광역시 중구 은하수로 10</div>
          <div className="card-sub">더테라스프라자 1층</div>
        </div>
        <img src="./res/images/bread_img.jpg" alt="" />
      </a>
      <a href="/" className="card">
        <div className="card-info">
          <div className="card-title">이성당</div>
          <div className="card-sub">전북특별자치도 군산시 중앙로 177</div>
        </div>
        <img src="./res/images/bread_img.jpg" alt="" />
      </a>
      <a href="/" className="card">
        <div className="card-info">
          <div className="card-title">자연도 소금빵</div>
          <div className="card-sub">인천광역시 중구 은하수로 10</div>
          <div className="card-sub">더테라스프라자 1층</div>
        </div>
        <img src="./res/images/bread_img.jpg" alt="" />
      </a>
      <a href="/" className="card">
        <div className="card-info">
          <div className="card-title">자연도 소금빵</div>
          <div className="card-sub">인천광역시 중구 은하수로 10</div>
          <div className="card-sub">더테라스프라자 1층</div>
        </div>
        <img src="/res/images/bread_img.jpg" alt="" />
      </a>
    </div>
  );
};

export default CardSm;
