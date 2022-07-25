import React from "react";
import styled from "styled-components";
import { SortViews, ProductsList, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="section section-center">
        <SortViews />
        <ProductsList />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default ProductsPage;
