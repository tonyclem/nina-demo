import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";

const ListView = ({ products }) => {
  const { addItemToCart } = useCartContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, imageUrl, name, price, description, des } = product;
        return (
          <article key={id}>
            <img src={imageUrl} alt={name} />

            <div>
              <h4>{name}</h4>
              <button className="btn btn-color">{`€${price}.00`}</button>
              <p>{description}</p>
              <p>{des}</p>
              <button
                type="button"
                className="btn"
                onClick={() => addItemToCart(product)}
              >
                add to cart
              </button>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  margin: 3rem;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  .btn {
    bottom: 0;
    align-items: center;
    margin-bottom: 1.5rem;
    left: 4rem;
    color: #000;
    background: #f1f1f1;
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

  h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.7rem;
  }

  p {
    max-width: 45em;
    margin-bottom: 0.7rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }

  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
