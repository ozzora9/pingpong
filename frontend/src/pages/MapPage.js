import { useState } from "react";
import React from "react";
import Maps from "../components/Maps";
import MapList from "../components/MapList";
import "../styles/MapList.css";

const mockList = [
  {
    id: 0,
    name: "이성당",
    src: "./res/images/bread_img.jpg",
    location: "전북특별자치도 군산시 중앙로 177",
  },
  {
    id: 1,
    name: "자연도 소금빵",
    src: "./res/images/bread_img.jpg",
    location: "인천광역시 부평구 중앙로 177",
  },
  {
    id: 2,
    name: "성심당",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177번길 13",
  },
  {
    id: 3,
    name: "우무",
    src: "./res/images/bread_img.jpg",
    location: "제주특별자치도 서귀포시 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
  },
  {
    id: 4,
    name: "콜드버터베이크샵",
    src: "./res/images/bread_img.jpg",
    location: "대전광역시 중구 중앙로 177",
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
