import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartButtons from './CartButtons';
import { useAuth0 } from '@auth0/auth0-react';
import { closeSidebar } from '../store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TiTimes } from 'react-icons/ti';
const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.products.isSidebarOpen);
  const dispatch = useDispatch();
  const { user } = useAuth0();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(closeSidebar())}
          >
            <TiTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link onClick={() => dispatch(closeSidebar())} to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout" onClick={() => dispatch(closeSidebar())}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 30px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-black);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
