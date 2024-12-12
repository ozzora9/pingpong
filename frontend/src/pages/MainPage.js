import SearchBar from "../components/SearchBar";
import CardSm from "../components/CardSm";
import CardLg from "../components/CardLg";
import "../styles/BreadRain.css";
import "../styles/SearchBar.css";
import "../styles/CardSm.css";
import "../styles/CardLg.css";
import "../styles/MainPage.css";

const breadImages = [
  "/res/images/bread/croissant.png",
  "/res/images/bread/bread.png",
  "/res/images/bread/meron_pan.png",
  "/res/images/bread/pretzel.png",
];

const generateBreads = (count) => {
  const breads = [];
  for (let i = 0; i < count; i++) {
    const randomImage =
      breadImages[Math.floor(Math.random() * breadImages.length)];
    const randomLeft = Math.random() * 100;
    const randomSize = Math.random() * 20 + 35;
    const randomDuration = Math.random() * 5 + 6;
    const randomDelay = Math.random() * 3;
    const randomRotate = Math.random() * 360;

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
          "--rotate": `${randomRotate}deg`,
        }}
      />
    );
  }
  return breads;
};

const getRandomStore = (storeList, count) => {
  const randomStore = [...storeList].sort(() => 0.5 - Math.random());
  return randomStore.slice(0, count);
};

const MainPage = ({ storeList }) => {
  const randomStores = getRandomStore(storeList, 4);
  return (
    <div className="container">
      <div className="content main-page">
        <h1 className="title">집 근처 빵집을 찾고 있다면?</h1>
        {generateBreads(10)}
        <SearchBar />
        <i class="fa-solid fa-angles-down"></i>
      </div>
      <div className="content card-sm">
        <h3 className="subtitle">
          <div>새로 알게 된 내 취향!</div>
          <div>내 단짝이 될 빵은 어디에?</div>
        </h3>
        <p className="note">다른 사람들의 원픽 빵 엿보기 👀</p>
        <div className="card-box">
          {randomStores.map((store) => {
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
