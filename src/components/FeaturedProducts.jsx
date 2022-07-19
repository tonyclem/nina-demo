import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { newArrivalProduct } from "../utils/constants";
import Product from "./Product";
import CarouselSlider from "react-carousel-slider";

let data = [
  {
    des: "1",
    imgSrc: "https://i.imgur.com/d5aiXJP.jpg",
  },
  {
    des: "2",
    imgSrc: "https://i.imgur.com/pgCzueK.jpg",
  },
  {
    des: "3",
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg",
  },
  {
    des: "4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    des: "5",
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg",
  },
];

let sliderBoxStyle = {
  height: "250px",
  //, width: "200px"
  // , background: "tranparent"
};

let manner = {
  autoSliding: { interval: "4s" },
  duration: "0.3s",
};

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>New Arrival</h2>
      </div>
      <div className="section-center featured">
        {/* {newArrivalProduct.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })} */}

        <CarouselSlider
          slideItems={data}
          manner={manner}
          sliderBoxStyle={sliderBoxStyle}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;

    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
