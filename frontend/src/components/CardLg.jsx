import React from "react";
import CardLarge from "./CardLarge";

const CardLg = () => {
  return (
    <div className="card-section-lg">
      <div className="card-box card-grid">
        {/* <div className="card-collapse card-location">
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
          </div> */}
        <CardLarge
          subtitle="지도를 통한 검색 기능"
          title={"집 근처 빵 맛집을\n찾아낼래"}
          note={
            "지도 위 마커를 따라가면? 나만의 빵 맛집 발견!\n집 주변 나만의 인생빵집을 찾아보세요."
          }
          color="#ff8a65"
          img="/res/images/LOCATION.png"
          active
        />
        <CardLarge
          subtitle="지도를 통한 검색 기능"
          title={"집 근처 빵 맛집을\n찾아낼래"}
          note={
            "지도 위 마커를 따라가면? 나만의 빵 맛집 발견!\n집 주변 나만의 인생빵집을 찾아보세요."
          }
          color="#ff8a65"
          img="/res/images/LOCATION.png"
        />
        <CardLarge
          subtitle="지도를 통한 검색 기능"
          title={"집 근처 빵 맛집을\n찾아낼래"}
          note={
            "지도 위 마커를 따라가면? 나만의 빵 맛집 발견!\n집 주변 나만의 인생빵집을 찾아보세요."
          }
          color="#ff8a65"
          img="/res/images/LOCATION.png"
        />
        <CardLarge
          subtitle="지도를 통한 검색 기능"
          title={"집 근처 빵 맛집을\n찾아낼래"}
          note={
            "지도 위 마커를 따라가면? 나만의 빵 맛집 발견!\n집 주변 나만의 인생빵집을 찾아보세요."
          }
          color="#ff8a65"
          img="/res/images/LOCATION.png"
        />
        {/* <div className="card-primary card-mate">
            <div className="primary-txt">
              <h2 className="card-note">혼자 가던 빵축제도 이젠 함께!</h2>
            </div>
            <div className="primary-img">
              <img src="/res/images/MATE-sm.png" alt="" />
            </div>
          </div>
          <div className="card-primary card-mood">
            <div className="primary-txt">
              <h2 className="card-note">#베이커리 #분좋카 #MOOD</h2>
            </div>
            <div className="primary-img">
              <img src="/res/images/MOOD-sm.png" alt="" />
            </div>
          </div>
          <div className="card-primary card-location">
            <div className="primary-txt">
              <h2 className="card-note">집 근처 빵맛집을 찾아낼래</h2>
            </div>
            <div className="primary-img">
              <img src="/res/images/LOCATION.png" alt="" />
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default CardLg;
