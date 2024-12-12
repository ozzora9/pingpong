import { useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
} from "react-kakao-maps-sdk";

const Maps = ({ list, center, setCenter, currentLocation }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState();

  return (
    <Map
      center={center}
      style={{ width: "100vw", height: "calc(100vh - 68px)" }}
      level={3}
    >
      {currentLocation && (
        <MapMarker
          position={currentLocation}
          image={{
            src: "https://i.ibb.co/bKKZGTP/Group-43.png",
            size: {
              width: 40,
              height: 40,
            },
          }}
        />
      )}
      {list.map((store) => (
        <div key={store.id}>
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
            onClick={() => {
              setIsOverlayOpen(true);
              setSelectedMarker(store);
            }}
          />
          {isOverlayOpen && selectedMarker?.id === store.id && (
            <CustomOverlayMap
              position={{ lat: store.lat, lng: store.lng }}
            >
              <div className="overlay-wrap">
                <div className="overlay-info">
                  <div className="overlay-title">
                    {store.name}
                    <div
                      className="overlay-close"
                      onClick={() => setIsOverlayOpen(false)}
                      title="닫기"
                    >
                      <i
                        className="fa-solid fa-xmark "
                        style={{ fontSize: "24px" }}
                      ></i>
                    </div>
                  </div>
                  <div className="overlay-body">
                    <div className="overlay-img">
                      <img
                        src={store.src}
                        width="73"
                        height="70"
                        alt={store.name}
                      />
                    </div>
                    <div className="overlay-desc">
                      <div className="overlay-ellipsis">
                        {store.sub}
                      </div>
                      {/* <div>
                        <a
                          href="https://www.kakaocorp.com/main"
                          target="_blank"
                          className="overlay-link"
                          rel="noreferrer"
                        >
                          홈페이지로 이동
                        </a>
                      </div> */}
                      <div className="overlay-favBread">
                        <span>n명의</span>
                        <span>
                          <span style={{ color: "#ffc62e" }}>
                            인생빵집
                          </span>
                          이에요!
                        </span>
                      </div>
                      <div className="overlay-mood">
                        <span>#소금빵 맛집</span>
                        <span></span>
                        #포장전문
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomOverlayMap>
          )}
        </div>
      ))}
    </Map>
  );
};

export default Maps;
