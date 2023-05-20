import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { MdShoppingCart, MdLogin, MdLogout } from 'react-icons/md';
import { useAppSelector, useAppDispatch } from '../store/index';
import { FC } from 'react';
import { closeSidebar } from '../store/filterSlice';

const CartButtons: FC = () => {
  const { total_items } = useAppSelector((state) => state.cart);
  const { loginWithRedirect, logout, user } = useAuth0();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin } as LogoutOptions);
  };

  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        onClick={() => dispatch(closeSidebar())}
        to="/cart"
        className="cart-btn"
      >
        <span className="cart-container">
          <MdShoppingCart />
          <div className="cart-value">{total_items}</div>
        </span>
      </Link>
      {user ? (
        <button type="button" className="auth-btn" onClick={handleLogout}>
          <MdLogout />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={handleClick}>
          <MdLogin />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 90px;

  .cart-btn {
    color: var(--clr-white);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 2rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
