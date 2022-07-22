import React from "react";

import {
  Hero,
  FeaturedProducts,
  SortViews,
  HomePageProducts,
  DealView,
  Reviewer,
  Contact,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <SortViews />
      <HomePageProducts />
      <DealView />
      <Reviewer />
      <Contact />
    </main>
  );
};

export default HomePage;
