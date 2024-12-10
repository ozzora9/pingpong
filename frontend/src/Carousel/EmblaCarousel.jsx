import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CardSmall } from "../components/CardSmall"; // CardSmall 컴포넌트 임포트
import Autoplay from "embla-carousel-autoplay";

// EmblaCarousel 컴포넌트
const EmblaCarousel = ({ storeList }) => {
  const options = {
    slidesToScroll: 4, // 한 번에 4개의 슬라이드씩 이동
    loop: true, // 반복
    containScroll: "trimSnaps",
  };

  // EmblaCarousel 설정
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {storeList && storeList.length > 0 ? (
            storeList.map((store, index) => (
              <div className="embla__slide" key={index}>
                <CardSmall store={store} />
              </div>
            ))
          ) : (
            <p>No stores available</p> // 데이터가 없을 경우
          )}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
