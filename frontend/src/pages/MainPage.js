import SearchBar from "../components/SearchBar";
import CardSm from "../components/CardSm";
import CardLg from "../components/CardLg";
import "../styles/SearchBar.css";
import "../styles/CardSm.css";
import "../styles/CardLg.css";
import "../styles/MainPage.css";

const storeList = [
  {
    id: 0,
    name: "이성당",
    sub: "전북특별자치도 군산시 중앙로 177",
    lat: 35.98715192,
    lng: 126.7112342,
  },
  {
    id: 1,
    name: "자연도 소금빵",
    sub: "인천광역시 중구 은하수로 10 더테라스프라자 177",
    lat: 37.4919681,
    lng: 126.5813687,
  },
  {
    id: 2,
    name: "성심당",
    sub: "대전광역시 중구 대종로 480번길 15",
    lat: 36.3277658,
    lng: 127.427359,
  },
  {
    id: 3,
    name: "우무",
    sub: "제주특별자치도 제주시 한림읍 한림로 542-1",
    lat: 33.4059201,
    lng: 126.2564901,
  },
];

const MainPage = () => {
  storeList.forEach((store) => {
    console.log(
      `lat: ${store.name}, lng: ${store.lng}, name: ${store.name}`
    );
  });

  return (
    <div className="container">
      <div className="content main-page">
        <h1 className="title">집 근처 빵집을 찾고 있다면?</h1>
        <SearchBar />
      </div>
      <div className="content card-sm">
        <h3 className="subtitle">
          <div>새로 알게 된 내 취향!</div>
          <div>내 단짝이 될 빵은 어디에?</div>
        </h3>
        <p className="note">다른 사람들의 원픽 빵 엿보기 👀</p>
        <div className="card-box">
          {storeList.map((store) => {
            return <CardSm store={store} key={store.id} />;
          })}
        </div>
      </div>
      <div className="content">
        <div className="card-description">
          <p className="note">빵글빵글의 기능을 소개합니다!</p>
          <h3 className="sub-title">지금 나에게 필요한 건...</h3>
          <CardLg />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
