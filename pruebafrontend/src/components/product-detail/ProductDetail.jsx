import React, { useState, useEffect } from "react";
import { SearchBox } from "../search-box/SearchBox";
import { BreadCrumb } from "../bread-crumb/BreadCrumb";
import "./ProductDetail.scss";
import { ProductCardDetail } from "./components/product-card-detail/ProductCardDetail";
import { useParams } from "react-router";
import axios from "axios";

export const ProductDetail = () => {
  const apiBase = "http://localhost:3001/api/items/";
  const [idDetail, setIdDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(apiBase + id).then((resp) => {
      setIdDetail(resp.data.item);
    });
  }, [id]);
  return (
    <div>
      <SearchBox />
      <BreadCrumb />
      <div className="product-detail">
        <div className="detail-container">
          <div className="container-card">
            <ProductCardDetail
              title={idDetail.title}
              condition={idDetail.condition}
              sold_quantity={idDetail.sold_quantity}
              picture={idDetail.picture}
              price={idDetail.price}
              description={idDetail.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
