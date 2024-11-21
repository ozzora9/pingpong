import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Maps = () => {
  return (
    <Map
      center={{ lat: 35.9461621735802, lng: 126.68328372447189 }}
      style={{ width: "100vw", height: "calc(100vh - 80px)" }}
      level={3}
    >
      <MapMarker
        position={{ lat: 35.9461621735802, lng: 126.68328372447189 }}
        image={{
          src: "https://i.ibb.co/7r9XS2w/map-Marker.png",
          size: {
            width: 56,
            height: 52,
          },
          options: {
            offset: {
              x: 28,
              y: 36,
            },
          },
        }}
      ></MapMarker>
    </Map>
  );
};

export default Maps;
