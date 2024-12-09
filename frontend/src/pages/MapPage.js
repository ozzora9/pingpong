import { useState } from "react";
import React from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const MapPage = ({ storeList }) => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div style={{ display: "flex" }}>
      <MapList list={storeList} onSelectItem={setSelectedItem} />
      <Maps list={storeList} selectedItem={selectedItem} />
    </div>
  );
};

export default MapPage;
