import React from "react";

import ImgOne from "../assets/img/products/eight.jpg";

const Products = () => {
  return (
    <section className="section-2 py-5">
      <div className="container">
        <h2>New Arrivals</h2>

        <div className="row mt-4">
          <div className="col-6 col-md-3">
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

          <div className="col-6 col-md-3">
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

          <div className="col-6 col-md-3">
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

          <div className="col-6 col-md-3">
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

          <div className="col-6 col-md-3">
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

          <div className="col-6 col-md-3">
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
        </div>
      </div>
    </section>
  );
};

export default Products;
