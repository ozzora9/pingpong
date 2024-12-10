import { Map, MapMarker } from "react-kakao-maps-sdk";

const Maps = ({ list, center, setCenter }) => {
  return (
    <Map
      center={center}
      style={{ width: "100vw", height: "calc(100vh - 68px)" }}
      level={3}
    >
      {list.map((store) => (
        <MapMarker
          key={store.id}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
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
        />
      ))}
    </Map>
  );
};

export default Maps;
