import React from "react";

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#" className="text-decoration-none">
            Home
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
