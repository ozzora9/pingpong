import React from "react";
import EmblaCarousel from "../Carousel/EmblaCarousel";
import "../Carousel/CarouselStyle.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselPage = () => {
  return (
    <div className="Carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
    </div>
  );
};

export default CarouselPage;
