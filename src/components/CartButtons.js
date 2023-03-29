import React from 'react';
import { FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { closeSidebar } from '../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingCart, MdLogin, MdLogout } from 'react-icons/md';
const CartButtons = () => {
  const { total_items } = useSelector((state) => state.cart);
  const { loginWithRedirect, logout, user } = useAuth0();
  const dispatch = useDispatch();

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
        <button
          type="button"
          className="auth-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <MdLogout />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
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
