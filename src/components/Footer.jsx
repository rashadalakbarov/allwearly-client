import React, { useEffect, useState } from "react";

import axios from "axios";

const Footer = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/company") // API endpoint adresin
      .then((response) => {
        setCompany(response.data);
      })
      .catch((error) => {
        console.error("Şirket bilgisi alınamadı:", error);
      });
  }, []);

  if (!company) return <div>Yükleniyor...</div>;
  return (
    <footer className="py-5 text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 pb-4">
            <img src={company.logo} alt="" width={150} />
            <p className="pt-3 pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <div className="col-md-3 pb-4">
            <h3>Categories</h3>

            <ul>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Mens</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 pb-4">
            <h3>Quick Links</h3>

            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 pb-4">
            <h3>Get in touch</h3>

            <ul>
              <li>
                <a href="#">+994558215673</a>
              </li>
              <li>
                <a href="#">info@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
