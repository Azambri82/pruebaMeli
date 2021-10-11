import React, { useRef, useState } from "react";
import "./SearchBox.scss";
import Logo from "../../assets/images/Logo_ML.png";
import Search from "../../assets/images/ic_Search.png";
import { useHistory } from "react-router";
export const SearchBox = () => {
  const history = useHistory();
  const searchInput = useRef(null);
  const handleSendSearch = () => {
    history.push("/");
    history.push(`items?q=${searchInput.current.value}`);
  };

  return (
    <div className="search-box">
      <div className="container-elements">
        <div className="input-container">
          <a href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <input
            className="input"
            type="text"
            placeholder="Nunca dejes de buscar"
            ref={searchInput}
          />
          <button className="button-search" onClick={handleSendSearch}>
            <img src={Search} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};
