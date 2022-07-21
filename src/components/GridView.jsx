import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { dataForHomePage } from "../utils/constants";
import AllHomePageProduct from "./AllHomePageProduct";

const GridView = () => {
  return (
    <Wrapper>
      <div className="featured">
        {dataForHomePage.map((product) => {
          return <AllHomePageProduct key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="all-btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    display: grid;
    grid-gap: 1rem;
  }

  .all-btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    background: green;
    color: white;
    padding: 0.4rem;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: auto auto auto auto;
    }
  }
`;

export default GridView;
