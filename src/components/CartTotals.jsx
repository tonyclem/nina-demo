import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const CartTotals = () => {
  const { cartTotal } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>subtotal: €{cartTotal}.00</h5>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default CartTotals;
