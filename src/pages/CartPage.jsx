import styled from "styled-components";
import { PageHero } from "../components";
const CartPage = () => {
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <h1>Hello world</h1>
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
