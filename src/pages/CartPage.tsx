import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';
import { FC } from 'react';
import { useAppSelector } from '../store/index';

const CartPage: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero color={'black'} title="cart" />
      <Wrapper className="page">
        <CartContent></CartContent>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  padding: 5rem 0;
  min-height: 91.5vh;
  .empty {
    padding-top: 80px;
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
