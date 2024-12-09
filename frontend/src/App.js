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
import CarouselPage from "./pages/CarouselPage";
import Footer from "./components/Footer";
import "./styles/NavBar.css";
import "./styles/Footer.css";

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
          <Route path="/carousel" element={<CarouselPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
