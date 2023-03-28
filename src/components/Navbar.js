import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useAuth0 } from '@auth0/auth0-react';
import { openSidebar } from '../store/productsSlice';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();

  const { user } = useAuth0();
  return (
    <Head>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              type="button "
              className="nav-toggle"
              onClick={() => dispatch(openSidebar())}
            >
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            {user && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </ul>
          <CartButtons />
        </div>
      </NavContainer>
    </Head>
  );
};

const Head = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  background: rgba(99, 119, 81, 0.44);
`;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 120px;
      margin-left: 5px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-white);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        position: relative;
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          color: var(--clr-grey-3);
        }
      }
      a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 4px;
        background-color: var(--clr-primary-8);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
      a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
