import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import TastePage from "./pages/TastePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CarouselPage from "./pages/CarouselPage";
import "./styles/NavBar.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/taste" element={<TastePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
