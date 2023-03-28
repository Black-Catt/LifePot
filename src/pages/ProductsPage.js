import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  Filters,
  ProductList,
  Sort,
  PageHero,
  Loading,
  Pagination,
} from '../components';
import {
  loadProducts,
  sortProducts,
  filterProducts,
} from '../store/filterSlice';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { sort, filters } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(loadProducts(products));
    if (loading) {
      return <Loading />;
    }
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
    if (loading) {
      return <Loading />;
    }
    // eslint-disable-next-line
  }, [products, sort, filters]);

  return (
    <Main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <Pagination>
              <ProductList />
            </Pagination>
          </div>
        </div>
      </Wrapper>
    </Main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 0rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

const Main = styled.main`
  background: var(--bg-products) center/ cover no-repeat;
`;

export default ProductsPage;
