import React from "react";

const CardCollapse = () => {
  return (
    <div className="container">
      <div className="content card-section-lg">
        <div className="card-box card-grid">
          <div className="card-collapse card-location">
            <div className="collapse-txt">
              <div className="txt-radius">
                <p>지도를 통한 검색 기능</p>
              </div>
              <div className="card-sub-title">
                <p>집 근처 빵 맛집을</p>
                <p>찾아낼래</p>
              </div>
              <div className="card-note">
                <p>지도 위 마커를 따라가면? 나만의 빵 맛집 발견!</p>
                <p>집 주변 나만의 인생빵집을 찾아보세요.</p>
              </div>
            </div>
            <div className="collapse-img">
              <img style={{ display: "flex" }} src="/res/images/LOCATION.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCollapse;
