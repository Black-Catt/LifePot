import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from './Product';

const RelatedProducts = () => {
  const { single_product: product, products } = useSelector(
    (state) => state.products
  );
  const [related, setRelated] = useState([]);
  useEffect(() => {
    const filtered = products.filter((p) => p.category === product.category);
    setRelated(filtered.slice(0, 3));
  }, [product, products]);

  return (
    <Wrapper>
      <h4>Related:</h4>
      <RelatedItems>
        {related.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </RelatedItems>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 0px 0px 0.9rem 0.9rem;
  background: var(--clr-white);
  padding-bottom: 5rem;
  h4 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const RelatedItems = styled.div`
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  img {
    height: 225px;
    width: 225px;
  }
`;

export default RelatedProducts;
