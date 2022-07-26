import React from "react";
import { useFilterContext } from "../../context/filter_context";
import { useProductsContext } from "../../context/products_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductsList = () => {
  const { grid_view } = useFilterContext();
  const { products } = useProductsContext();

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductsList;
