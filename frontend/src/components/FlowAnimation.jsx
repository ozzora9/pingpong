import React from "react";
import "./FlowerAnimation.css";

const breadImages = [
  // "res/images/mapMarker.png",
  "res/images/croissant.png",
  "res/images/bread.png",
  "res/images/meron_pan.png",
  "res/images/pretzel.png",
]; // 빵 이미지 경로 리스트

const generateBreads = (count) => {
  const breads = [];
  for (let i = 0; i < count; i++) {
    const randomImage =
      breadImages[Math.floor(Math.random() * breadImages.length)]; // 랜덤 이미지 선택
    const randomLeft = Math.random() * 100; // 화면 가로 위치 (0~100%)
    const randomSize = Math.random() * 20 + 30; // 빵 크기 (30px ~ 50px)
    const randomDuration = Math.random() * 5 + 6; // 애니메이션 속도 (6초 ~ 11초)
    const randomDelay = Math.random() * 3; // 애니메이션 딜레이 (0초 ~ 3초)

    breads.push(
      <img
        key={i}
        src={randomImage}
        alt="빵"
        className="bread"
        style={{
          left: `${randomLeft}%`,
          width: `${randomSize}px`,
          animationDuration: `${randomDuration}s`,
          animationDelay: `${randomDelay}s`,
        }}
      />
    );
  }
  return breads;
};

const BreadAnimation = () => {
  return (
    <div className="bread-container">
      <h1 className="title">흩날리는 빵 🥖</h1>
      {generateBreads(15)} {/* 빵 15개 생성 */}
    </div>
  );
};

export default BreadAnimation;
