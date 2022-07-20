import React from "react";
import styled from "styled-components";
import { dataForHomePage } from "../utils/constants";
import AllHomePageProduct from "./AllHomePageProduct";

const GridView = () => {
  return (
    <Wrapper>
      <div className="featured">
        {dataForHomePage.map((products) => {
          return <AllHomePageProduct key={products.id} {...products} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    display: grid;
    grid-gap: 1rem;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: auto auto auto auto;
    }
  }
`;

export default GridView;
