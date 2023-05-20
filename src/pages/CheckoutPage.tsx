import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/index';
import { FC } from 'react';

const CheckoutPage: FC = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <main>
      <PageHero color={'var(--clr-black)'} title="checkout" />
      <Wrapper>
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72vh;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
