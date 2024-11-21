import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        빵글빵글
      </Link>
      <div className="nav-menu">
        <Link to="/map">지도 보기</Link>
        <Link to="/taste">취향표 작성</Link>
        <Link to="/login">로그인</Link>
      </div>
    </nav>
  );
};

export default NavBar;
