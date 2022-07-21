import React from "react";

import {
  Hero,
  FeaturedProducts,
  SortViews,
  HomePageProducts,
  DealView,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <SortViews />
      <HomePageProducts />
      <DealView />
    </main>
  );
};

export default HomePage;
