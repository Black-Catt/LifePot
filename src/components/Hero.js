import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper>
      <Inner className="section-center">
        <Content>
          <h1 className="white-color">Find your perfect ceramics</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products" className="btn hero-btn">
            show now
          </Link>
        </Content>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--bg-home) center no-repeat;
  padding-top: 80px;
`;

const Inner = styled.div`
  min-height: 60vh;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    text-align: center;
    opacity: 0.7;
  }
  @media (min-width: 992px) {
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

const Content = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: none;
  }
  margin-bottom: 30px;
`;

export default Hero;
