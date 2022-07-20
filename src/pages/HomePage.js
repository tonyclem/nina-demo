import React from "react";

import {
  Hero,
  FeaturedProducts,
  SortViews,
  HomePageProducts,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <SortViews />
      <HomePageProducts />
    </main>
  );
};

export default HomePage;
