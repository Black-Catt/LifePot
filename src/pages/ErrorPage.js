import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h3>The page you requested could not be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 91.5vh;
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
