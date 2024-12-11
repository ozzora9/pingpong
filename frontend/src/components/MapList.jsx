import { useState } from "react";
import MapItem from "./MapItem";

const MapList = ({ list, setCenter, onOpenModal }) => {
  const [search, setSearch] = useState("");

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

  const filteredList = getFilteredData();

  return (
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
              <button>
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
  );
};

export default MapList;
