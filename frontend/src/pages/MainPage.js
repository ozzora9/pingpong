import SearchBar from "../components/SearchBar";
import CardSm from "../components/CardSm";
import CardLg from "../components/CardLg";
import "../styles/SearchBar.css";
import "../styles/CardSm.css";
import "../styles/CardLg.css";
import "../styles/MainPage.css";

const MainPage = () => {
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
        <CardSm />
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
