import { useState } from "react";
import { Link } from "react-router-dom";

const StoreModal = ({ isOpen, onClose, storeInfo }) => {
  const [isStar, setIsStar] = useState(false);
  const [isSave, setIsSave] = useState(false);

  if (!isOpen) return null;

  const toggleStar = () => {
    setIsStar((prev) => !prev);
  };

  const toggleSave = () => {
    setIsSave((prev) => !prev);
  };
  return (
    <div className="modal-container" onClick={onClose}>
      <div
        className="marker-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <i
            className="fa-solid fa-chevron-left"
            style={{ fontSize: "24px" }}
            onClick={onClose}
          ></i>
          <i
            className="fa-solid fa-xmark"
            style={{ fontSize: "28px" }}
            onClick={onClose}
          ></i>
        </div>
        <div className="modal-title-img">
          <Link to="#" className="modal-title-img-shadow">
            <img src={storeInfo.src} alt="" />
          </Link>
        </div>
        <div className="modal-content">
          <div className="modal-title-box">
            <div className="modal-title">
              <div className="modal-title-num">{storeInfo.num}</div>
              <div className="modal-title-name">{storeInfo.name}</div>
              <div className="modal-title-location">
                {storeInfo.address}
              </div>
            </div>
            <div style={{ flex: "1 0 0" }}></div>
            <div className="star">
              <i
                className={`fa-${
                  isStar ? "solid" : "regular"
                } fa-star`}
                onClick={toggleStar}
              ></i>
            </div>
          </div>
          <div className="storeModal-favBread">
            <i class="fa-solid fa-location-dot"></i>
            <span style={{ textDecoration: "underline" }}>124</span>
            명의
            <span>
              <span style={{ color: "#ffc62e" }}>인생 빵집</span>
              이에요!
            </span>
          </div>
          <div className="shareBox">
            <div className="shareItem">
              <i
                className={`fa-${
                  isSave ? "solid" : "regular"
                } fa-bookmark`}
                onClick={toggleSave}
              ></i>
              <span>가볼래요</span>
            </div>
            <div className="shareItem">
              <i className="fa-solid fa-location-arrow"></i>
              <span>길찾기</span>
            </div>
            <div className="shareItem">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              <span>공유</span>
            </div>
          </div>
          <div className="division">
            <hr color="#f4f4f4" />
          </div>
          <div className="review-summary">
            <div className="modal-sub">리뷰 요약</div>
            <div className="modal-tag">
              <i class="fa-solid fa-tags"></i>
            </div>
          </div>
          <div className="division">
            <hr color="#f4f4f4" />
          </div>
          <div className="review-summary">
            <div className="modal-sub">리뷰</div>
          </div>
          <div className="division">
            <hr color="#f4f4f4" />
          </div>
          <div className="review-summary">
            <div className="modal-sub">메뉴 정보</div>
          </div>
          <div className="division">
            <hr color="#f4f4f4" />
          </div>
          <div className="review-summary">
            <div className="modal-sub">상세 정보</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
