import React from "react";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import CardItem from "../components/CardItem";

const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumb />

        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3>Categories</h3>

                <ul className="mb-3">
                  <li className="mb-2">
                    <input id="check-kids" type="checkbox" />
                    <label htmlFor="check-kids" className="ps-2">
                      Kids
                    </label>
                  </li>

                  <li className="mb-2">
                    <input id="check-women" type="checkbox" />
                    <label htmlFor="check-women" className="ps-2">
                      Women
                    </label>
                  </li>

                  <li className="mb-2">
                    <input id="check-mens" type="checkbox" />
                    <label htmlFor="check-mens" className="ps-2">
                      Mens
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3>Brands</h3>

                <ul className="mb-3">
                  <li className="mb-2">
                    <input id="check-puma" type="checkbox" />
                    <label htmlFor="check-puma" className="ps-2">
                      Puma
                    </label>
                  </li>

                  <li className="mb-2">
                    <input id="check-killer" type="checkbox" />
                    <label htmlFor="check-killer" className="ps-2">
                      Killer
                    </label>
                  </li>

                  <li className="mb-2">
                    <input id="check-levis" type="checkbox" />
                    <label htmlFor="check-levis" className="ps-2">
                      Levis
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row pb-5">
              <CardItem />

              <CardItem />

              <CardItem />

              <CardItem />

              <CardItem />

              <CardItem />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
