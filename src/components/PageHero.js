import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product, color }) => {
  return (
    <Wrapper>
      <div style={{ color: color }} className="section-center">
        <h3>
          <Link style={{ color: color }} to="/">
            Home
          </Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;

const Wrapper = styled.section`
  background: transparent;
  width: 100%;
  padding-top: 110px;
  display: flex;
  align-items: center;

  h3 {
    font-size: 0.8rem;
    border-bottom: 1px solid ${(props) => props.color};
    padding-bottom: 30px;
    margin-bottom: 40px;
  }
  color: var(--clr-white);
  a {
    color: var(--clr-white);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
