import React from "react";
import styled from "styled-components";
import { comments } from "../utils/constants";

const Reviewer = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h2>What people say about us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          voluptatem eaque?
        </p>

        <div className="text-container">
          {comments.map((commentDb) => {
            const { id, imageUrl, comment, name, title, more } = commentDb;
            return (
              <article key={id} className="container">
                <h5>{comment}</h5>
                <p>{more}</p>
                <div className="box">
                  <img
                    src={imageUrl}
                    alt="comment img"
                    className="box-header"
                  />
                  <p>{name}</p>
                  <p>{title}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin: 1rem;

  .text-container {
    color: #fff;
    width: 200px;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2.5rem;
  }

  .container {
    width: 370px;
    background-color: #000;
    padding: 1.3rem 0.9rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }

  .container p {
    color: #fff;
  }

  .box {
    text-align: center;
  }
  .box-header {
    border-radius: 50%;
    background-color: #fff;
    width: 100px;
    height: 100px;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Reviewer;
