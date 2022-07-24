import React from "react";
import styled from "styled-components";

import { SortViews, ProductsList } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <Wrapper className="section section-center">
        <SortViews />
        <ProductsList />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default ProductsPage;
