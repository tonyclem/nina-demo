import React from "react";
import { useFilterContext } from "../context/filter_context";
import { dataForHomePage } from "../utils/constants";
import GridView from "./GridView";
import ListView from "./ListView";

const HomePageProducts = () => {
  const { grid_view } = useFilterContext();

  if (grid_view === false) {
    return <ListView dataForHomePage={dataForHomePage} />;
  }

  return <GridView dataForHomePage={dataForHomePage} />;
};

export default HomePageProducts;
