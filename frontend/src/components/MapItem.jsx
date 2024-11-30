const MapItem = ({ id, name, img, location }) => {
  return (
    <div>
      <ul className="store-list">
        <li className="store-item">
          <div className="store-info">
            <a href="#" className="store-img">
              {/* <img src={img} /> */}
            </a>
            <div className="store-detail">
              <p className="store-name">{name}</p>
              <p className="store-address">{location}</p>
            </div>
            <div className="goto-icon">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MapItem;
