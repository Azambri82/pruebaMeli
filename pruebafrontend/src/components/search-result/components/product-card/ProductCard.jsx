import React from "react";
import IcShiping from "../../../../assets/images/ic_shipping.png";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  amount,
  currency,
  picture,
  title,
  free_shipping,
  address
}) {
  return (
    <div className="product-card">
      <Link to={`/items/${id}`} className="text-decoration-none">
        <div className="container-product-card">
          <div className="img-description">
            <img src={picture} alt="image" className="product-image" />
            <div className="description">
              <div className="price-shiping">
                <div className="price">
                  {currency}
                  {amount}
                </div>
                {free_shipping && (
                  <img src={IcShiping} alt="shiping" className="ic-shiping" />
                )}
              </div>
              <div className="title">{title}</div>
            </div>
          </div>
          <div className="location">
            <div className="text-location">{address}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
