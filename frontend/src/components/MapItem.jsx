const MapItem = ({
  id,
  name,
  num,
  src,
  sub,
  lat,
  lng,
  setCenter,
  onOpenModal,
}) => {
  const handleClick = () => {
    setCenter({ lat, lng });
  };

  const handleModalOpen = () => {
    onOpenModal({ id, name, src, address: sub, num });
  };

  return (
    <div>
      <ul className="store-list">
        <li className="store-item">
          <div className="store-info">
            <a
              href="#"
              className="store-img"
              onClick={handleModalOpen}
            >
              <img src={src} alt="store" />
            </a>
            <div className="store-detail">
              <p className="store-name" onClick={handleClick}>
                {name}
              </p>
              <p className="store-address">{sub}</p>
            </div>
          </div>
          <div className="goto-icon" onClick={handleModalOpen}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MapItem;
