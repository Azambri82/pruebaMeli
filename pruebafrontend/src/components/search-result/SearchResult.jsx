import React, { useState, useEffect } from "react";
import { SearchBox } from "../search-box/SearchBox";
import { BreadCrumb } from "../bread-crumb/BreadCrumb";
import ProductCard from "./components/product-card/ProductCard";
import "./SearchResult.scss";
import { useLocation } from "react-router";
import axios from "axios";

export const SearchResult = () => {
  const apiBase = "http://localhost:3001/api/items"
  const location = useLocation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(apiBase+location.search).then(resp => {
      setItems(resp.data.items);
  });
}, [location])
  return (
    <div>
      <SearchBox />
      <BreadCrumb />
      <div className="search-result">
        <div className="result-container">
          <div className="container-cards">
            {items.map(item=>{
              return(
                <ProductCard 
                key={item.id}
                id={item.id}
                amount={item.price.amount}
                currency={item.price.currency}
                picture={item.picture}
                title={item.title}
                free_shipping={item.free_shipping}
                address={item.address}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
