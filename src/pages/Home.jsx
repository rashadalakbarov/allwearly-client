import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Products />
        <Products />
      </Layout>
    </>
  );
};

export default Home;
