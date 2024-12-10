import { useState } from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const MapPage = ({ storeList }) => {
  const [selectedItem, setSelectedItem] = useState();
  const [center, setCenter] = useState({
    lat: 35.9461621735802,
    lng: 126.68328372447189,
  });

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
      />
    </div>
  );
};

export default MapPage;
