import React from "react";
import "./ProductCardDetail.scss";
export const ProductCardDetail = ({
  title,
  condition,
  sold_quantity,
  picture,
  price,
  description,
}) => {
  return (
    <div className="product-card-detail">
      <div className="container-product-card-detail">
        <div className="container-image-detail">
          <img src={picture} alt="image" className="image" />
          <div className="aling-flex-end">
            <div className="name-price-detail">
              <div className="detail-quantity">
                {condition === "new" ? "Nuevo" : "Usado"} {sold_quantity}{" "}
                vendidos
              </div>
              <div className="name-product">{title}</div>
              <div className="price">$ {price}</div>
              <button type="submit" className="button-buy">
                comprar
              </button>
            </div>
          </div>
        </div>
        <div className="container-description">
          <div className="title-description">Descripción del producto</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
};
