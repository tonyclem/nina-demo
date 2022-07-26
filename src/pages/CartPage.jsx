import styled from "styled-components";
import { PageHero, CartContext } from "../components";
const CartPage = () => {
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContext />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
