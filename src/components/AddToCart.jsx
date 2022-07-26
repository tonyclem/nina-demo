import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, title, price, image } = product;
  const [amount, setAmount] = React.useState(1);

  const increase = () => {
    return setAmount(amount + 1);
  };

  const decrease = () => {
    return setAmount(amount - 1);
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, title, price, image, amount)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
`;

export default AddToCart;
