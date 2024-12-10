const MapItem = ({ id, name, src, sub, lat, lng, setCenter }) => {
  const handleClick = () => {
    setCenter({ lat, lng });
  };

  return (
    <div>
      <ul className="store-list">
        <li className="store-item">
          <div className="store-info">
            <a href="#" className="store-img">
              <img src={src} alt="store image" />
            </a>
            <div className="store-detail">
              <p className="store-name" onClick={handleClick}>
                {name}
              </p>
              <p className="store-address">{sub}</p>
            </div>
          </div>
          <div className="goto-icon">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MapItem;
