import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/heroBcg.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Nina Fashion <br /> Flash Dem
        </h1>
        <p>
          Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt eligendi laudantium velit corrupti? Rem et perspiciatis
          molestias voluptatem eligendi assumenda.
        </p>

        <Link to="#" className="btn hero-btn">
          Shop Now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="background" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-item: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-gray-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-top: 4rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
      color: var(--clr-gray-5);
    }
    .hero-btn {
      padding: 0.75 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  }
`;

export default Hero;
