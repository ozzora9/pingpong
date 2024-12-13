import { useEffect, useState } from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import StoreModal from "../components/StoreModal";
import "../styles/MapList.css";
import "../styles/StoreModal.css";
import "../styles/Overlay.css";

const MapPage = ({
  storeList,
  filteredStores,
  searchKeyword,
  addStore,
}) => {
  const [selectedItem, setSelectedItem] = useState();
  const [center, setCenter] = useState({
    lat: 37.4919681,
    lng: 126.5813687,
  });
  const [currentLocation, setCurrentLocation] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("현재 위치를 가져올 수 없습니다.", error);
        }
      );
    } else {
      console.error("위치 정보를 지원하지 않는 브라우저입니다.");
    }
  }, []);

  const handleOpenModal = (store) => {
    setModalData(store);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <MapList
        addStore={addStore}
        list={storeList}
        filteredStores={filteredStores}
        searchKeyword={searchKeyword}
        onSelectItem={setSelectedItem}
        setCenter={setCenter}
        onOpenModal={handleOpenModal}
      />
      <Maps
        list={storeList}
        filteredStores={filteredStores}
        searchKeyword={searchKeyword}
        selectedItem={selectedItem}
        center={center}
        setCenter={setCenter}
        currentLocation={currentLocation}
      />
      {isModalOpen && (
        <StoreModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          storeInfo={modalData}
          searchKeyword={searchKeyword}
        />
      )}
    </div>
  );
};

export default MapPage;
