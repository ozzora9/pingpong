import React from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const MapPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <MapList />
      <Maps />
    </div>
  );
};

export default MapPage;
