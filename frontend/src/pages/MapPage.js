import { useEffect, useState } from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const MapPage = ({ storeList }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [center, setCenter] = useState({
    lat: 37.4919681,
    lng: 126.5813687,
  });
  const [currentLocation, setCurrentLocation] = useState();

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

  return (
    <div style={{ display: "flex" }}>
      <MapList
        list={storeList}
        onSelectItem={setSelectedItem}
        setCenter={setCenter}
      />
      <Maps
        list={storeList}
        selectedItem={selectedItem}
        center={center}
        setCenter={setCenter}
        currentLocation={currentLocation}
      />
    </div>
  );
};

export default MapPage;
