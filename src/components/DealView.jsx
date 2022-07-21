import React from "react";
import styled from "styled-components";
import queenStyleFirst from "../assets/queenStyle-01.jpeg";
import queenStyleSecond from "../assets/queenStyle-02.jpeg";

const DealView = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="info">
          <h3>Deal of The Day</h3>
          <p>
            Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit
            Dolorem. <br />
            Ipsam, reiciendis enim.
          </p>
          <div className="countDown">
            <span>05</span>
            <span>08</span>
            <span>10</span>
            <div className="day">
              <span>Days</span>
              <span>Hours</span>
              <span>Minute</span>
            </div>
          </div>
          <button className="btn btn-primary">Shop Now</button>
        </div>
        <article className="img-info">
          <img
            src={queenStyleFirst}
            alt="queen style first"
            className="main-img"
          />
          <img
            src={queenStyleSecond}
            alt="queen style second"
            className="accent-img"
          />
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;

  .container {
    position: relative;
    display: flex;
    width: 90%;
    border: 1px solid black;
    margin: 3rem;
    border-radius: var(--radius);
  }

  .info {
    margin: 1rem 2rem;
  }

  .info .btn {
    margin: 1.4rem 0;
  }

  .img-info {
    right: 0;
    position: absolute;
  }

  .img-info img {
    width: 150px;
  }

  @media (min-width: 992px) {
  }
`;

export default DealView;
