import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";

const AllHomePageProduct = ({ id, imageUrl, name, description, price }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="item-container" key={id}>
          <div
            className="item"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <span>
              <BsHeart />
            </span>
            <button className="btn btn-color">{`€${price}.00`}</button>
          </div>
          <footer>
            <h5>{name}</h5>
            <p>{description}</p>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 2.3rem;

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    width: 220px;
    height: 310px;
    background: gray;
    border-radius: var(--radius);
    position: relative;
  }

  .item span {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    font-size: 1.2rem;
  }

  .btn {
    position: absolute;
    bottom: 0;
    align-items: center;
    margin-bottom: 1.5rem;
    left: 4rem;
    color: #000;
    background: #f1f1f1;
  }

  footer {
    margin: 0.8rem;
    text-align: center;
  }

  footer p {
    font-size: 12px;
  }
`;

export default AllHomePageProduct;