import { Link } from "react-router-dom";
const StoreModal = ({ isOpen, onClose, storeInfo }) => {
  if (!isOpen) return null;

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
          <Link to="#" className="title-img-shadow">
            <img src="\res\images\bread_img2.jpg" alt="" />
          </Link>
          <Link to="#" className="title-img-shadow">
            <img src="\res\images\bread_img2.jpg" alt="" />
          </Link>
          <Link to="#" className="title-img-shadow">
            <img src="\res\images\bread_img2.jpg" alt="" />
          </Link>
        </div>
        <div className="modal-title-box">
          <div className="modal-title">
            <div className="modal-title-num">{storeInfo.num}</div>
            <div className="modal-title-name">{storeInfo.name}</div>
            <div className="modal-title-location">
              {storeInfo.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreModal;
