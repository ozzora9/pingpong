import { useEffect, useState } from "react";
import MapItem from "./MapItem";

const MapList = ({ list, setCenter, onOpenModal, addStore }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState("");
  const [newStoreInfo, setNewStoreInfo] = useState({
    name: "",
    sub: "",
    num: "",
    lat: null,
    lng: null,
    src: null,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return list;
    }
    return list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleAddressChange = (e) => {
    setNewStoreInfo({ ...newStoreInfo, sub: e.target.value });
    setError(null);
  };

  // 파일 업로드 처리
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일 유효성 검사 (예: 이미지 파일만 허용)
      if (!file.type.startsWith("image/")) {
        setError("이미지 파일만 업로드할 수 있습니다.");
        return;
      }

      // 파일을 base64 문자열로 변환 (또는 서버에 업로드 후 URL 사용)
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStoreInfo({ ...newStoreInfo, src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // 주소를 좌표로 변환
  const handleAddressSearch = () => {
    if (!newStoreInfo.sub) {
      setError("주소를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    setError(null);

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(newStoreInfo.sub, (result, status) => {
      setIsLoading(false);

      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(
          result[0].y,
          result[0].x
        );
        setNewStoreInfo({
          ...newStoreInfo,
          lat: coords.getLat(),
          lng: coords.getLng(),
        });
      } else {
        setError("주소를 찾을 수 없습니다.");
      }
    });
  };

  // 확인 버튼 클릭 시
  const handleConfirm = () => {
    if (newStoreInfo.lat && newStoreInfo.lng && newStoreInfo.src) {
      addStore({
        ...newStoreInfo,
        id: list.length, // 고유 ID 생성 (실제로는 UUID 등 사용 권장)
      });
      setShowAddModal(false);
      setNewStoreInfo({
        name: "",
        sub: "",
        num: "",
        lat: null,
        lng: null,
        src: null,
      });
      setError(null);
    } else {
      setError("모든 정보를 입력해주세요.");
    }
  };
  const filteredList = getFilteredData();

  // Kakao Maps API 스크립트 로드 (한 번만 로드되도록 useEffect 사용)
  useEffect(() => {
    if (!window.kakao) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&libraries=services&autoload=false`;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          // API 로드 완료 후 처리
        });
      };
    }
  }, []);

  return (
    <>
      <div>
        <div className="lists-box">
          <div className="list-title-box">
            <div className="list-title">
              사람들과 인생빵집을
              <div></div>
              공유해봐요 👾
            </div>
          </div>
          <div className="list-header">
            <div className="list-sub-header">
              <div id="sub-title">인생빵집 리스트</div>
              <div id="sub-btn">
                <button
                  onClick={() => setShowAddModal(!showAddModal)}
                >
                  <div className="sub-btn-icon">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  나도 추가하기
                </button>
              </div>
            </div>
            <div className="list-search-box">
              <span className="list-search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>{" "}
              </span>
              <input
                value={search}
                onChange={onChangeSearch}
                className="list-search-txt"
                placeholder="검색"
              />
            </div>
          </div>
          <div className="items_wrapper">
            {filteredList.map((item) => (
              <MapItem
                key={item.id}
                {...item}
                setCenter={setCenter}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        </div>
      </div>
      {showAddModal && (
        <>
          <div
            className="addModal-backdrop"
            onClick={() => setShowAddModal(!showAddModal)}
          />
          <div className="addModal-container">
            <i
              className="fa-solid fa-xmark"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                fontSize: "28px",
              }}
              onClick={() => setShowAddModal(!showAddModal)}
            ></i>
            <h2 className="addModal-title">빵집 추가하기</h2>
            <div className="addModal-body">
              <label htmlFor="address">주소:</label>
              <input
                type="text"
                id="address"
                value={newStoreInfo.sub}
                onChange={handleAddressChange}
                placeholder="주소를 입력하세요"
              />
              <button
                onClick={handleAddressSearch}
                disabled={isLoading}
                className="address-search-button"
              >
                {isLoading ? "변환 중..." : "좌표 변환"}
              </button>

              <label htmlFor="file">사진:</label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {newStoreInfo.src && (
                <img
                  src={newStoreInfo.src}
                  alt="업로드된 이미지"
                  className="uploaded-image"
                />
              )}

              {error && <p className="error-message">{error}</p>}
            </div>
            <div className="addModal-footer">
              <button
                onClick={handleConfirm}
                disabled={
                  !newStoreInfo.lat ||
                  !newStoreInfo.lng ||
                  !newStoreInfo.src
                }
                className="confirm-button"
              >
                확인
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="cancel-button"
              >
                취소
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MapList;
