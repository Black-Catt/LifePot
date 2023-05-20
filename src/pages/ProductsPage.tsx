import { useEffect, FC } from 'react';
import styled from 'styled-components';
import { useGetProductsQuery } from '../api/productsSlice';
import { useAppSelector, useAppDispatch } from '../store/index';
import {
  Filters,
  Sort,
  PageHero,
  Loading,
  Pagination,
  Error,
} from '../components';
import {
  loadProducts,
  sortProducts,
  filterProducts,
} from '../store/filterSlice';

const ProductsPage: FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: products,
    isLoading: loading,
    isError: error,
  } = useGetProductsQuery();

  const { sort, filters } = useAppSelector((state) => state.filter);

  useEffect(() => {
    if (!loading) {
      dispatch(loadProducts(products));
    }
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
    // eslint-disable-next-line
  }, [products, sort, filters]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <Pagination />
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
      min-height: 1200px;
    }
  }
`;

const Main = styled.main`
  background: var(--bg-products) center/ cover no-repeat;
`;

export default ProductsPage;
