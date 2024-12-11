import React, { useState } from "react";
// import EmblaCarousel from "../Carousel/EmblaCarousel";
import CardSmCopy from "../Carousel/CardSmCopy";
import "../Carousel/CarouselStyle.css";

import FlowerAnimation from "../components/FlowAnimation";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselPage = () => {
  return (
    <>
      <FlowerAnimation />
      <div className="Carousel">
        <CardSmCopy slides={SLIDES} options={OPTIONS} />
      </div>
      {/* <div className="Carousel">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          src={"/res/images/bread_img.jpg"}
        />
      </div> */}
    </>
  );
};

export default CarouselPage;
