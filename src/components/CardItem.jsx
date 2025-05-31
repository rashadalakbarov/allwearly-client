import React from "react";

import ImgOne from "../assets/img/products/eight.jpg";

const CardItem = () => {
  return (
    <div className="col-6 col-md-4">
      <div className="product card border-0">
        <div className="card-img">
          <img src={ImgOne} alt="" className="w-100" />
        </div>
        <div className="card-body pt-3">
          <a href="" className="text-decoration-none">
            Red Check Shirt for Men
          </a>
          <div className="price mb-4">
            $50 <span className="text-decoration-line-through">$80</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
