import React from "react";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { products } = useProductsContext();
  const { grid_view } = useFilterContext();

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductsList;
