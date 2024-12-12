import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import TastePage from "./pages/TastePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./styles/NavBar.css";

const storeList = [
  {
    id: 0,
    name: "이성당",
    sub: "전북특별자치도 군산시 중앙로 177",
    num: "063-445-2772",
    lat: 35.98715192,
    lng: 126.7112342,
    src: "/res/images/store/gunsan.jpg",
  },
  {
    id: 1,
    name: "자연도 소금빵",
    sub: "인천광역시 중구 은하수로 10 더테라스프라자 177",
    num: "032-746-2244",
    lat: 37.4919681,
    lng: 126.5813687,
    src: "/res/images/store/salted.jpg",
  },
  {
    id: 2,
    name: "성심당",
    sub: "대전광역시 중구 대종로 480번길 15",
    num: "1588-8069",
    lat: 36.3277658,
    lng: 127.427359,
    src: "/res/images/store/daejeon.jpg",
  },
  {
    id: 3,
    name: "우무",
    sub: "제주특별자치도 제주시 한림읍 한림로 542-1",
    num: "010-6705-0064",
    lat: 33.4059201,
    lng: 126.2564901,
    src: "/res/images/store/umu(2).jpg",
  },
  {
    id: 4,
    name: "백구당",
    sub: "부산광역시 중구 중앙동4가 31-1",
    num: "051-465-0109",
    lat: 35.104807040631,
    lng: 129.035737319999,
    src: "/res/images/store/109.jpeg",
  },
  {
    id: 5,
    name: "태극당",
    sub: "서울특별시 중구 동호로24길 7",
    num: "02-2279-3152",
    lat: 37.5595217348788,
    lng: 127.005087759017,
    src: "/res/images/store/korea.jpg",
  },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<MainPage storeList={storeList} />}
          />
          <Route
            path="/map"
            element={<MapPage storeList={storeList} />}
          />
          <Route path="/taste" element={<TastePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
