import { useState } from "react";
import React from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const mockList = [
  {
    id: 0,
    name: "이성당",
    img: "어떻게 넣지",
    location: "전북특별자치도 군산시 중앙로 177",
  },
  {
    id: 1,
    name: "자연도 소금빵",
    img: "02-855-0381",
    location: "인천광역시 군산시 중앙로 177",
  },
  {
    id: 2,
    name: "성심당",
    img: "032-855-0381",
    location: "전북특별자치도 군산시 중앙로 177",
  },
];

const MapPage = () => {
  const [list, setList] = useState(mockList);

  return (
    <div style={{ display: "flex" }}>
      <MapList list={list} />
      <Maps />
    </div>
  );
};

export default MapPage;
