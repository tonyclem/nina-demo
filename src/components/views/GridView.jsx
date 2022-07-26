import React from "react";
import styled from "styled-components";
import AllHomePageProduct from "../AllHomePageProduct";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="featured">
        {products.map((product) => {
          return <AllHomePageProduct key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    display: grid;
    grid-template-columns: auto auto auto auto;
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

  @media (max-width: 996px) {
    .featured {
      grid-template-columns: auto auto;
      gap: -0.5rem;

      .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .item-container {
          width: 100%;
          margin: auto;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .item-container {
      width: 100%;
      margin: auto;

      .item {
        margin: auto;
        width: 150px;
        align-items: center;

        .btn {
          margin: auto;
          left: 0;
          right: 0;
          width: 50%;
          font-size: 12px;
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .item-container {
      width: 100%;

      .item {
        margin: 0;
        width: 110px;
        align-items: center;

        .btn {
          margin: auto;
          left: 0;
          right: 0;
          width: 50%;
          font-size: 10px;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

export default GridView;
