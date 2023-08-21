/* eslint-disable array-callback-return */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";//여기에 들어가 있었음
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const goToLogin =() => {
    navigate("/login");
  }
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div> 로그인 </div>
        </div>
      </div>
      <div className="img-logo">
        <img width={100} src="h-m-logo-4.png" alt="logo" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item,index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />   {/* (e)=>onCheckEnter(e) */}
        </div>
      </div>
     
    </div>
  );
};

export default Nav;
