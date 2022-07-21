import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const HomePageProducts = () => {
  const { grid_view } = useFilterContext();

  if (grid_view === false) {
    return <ListView />;
  }

  return <GridView />;
};

export default HomePageProducts;
