import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useGetProductsQuery } from '../api/apiSlice';
import {
  Filters,
  ProductList,
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

const ProductsPage = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading: loading,
    isError: error,
  } = useGetProductsQuery();

  const { sort, filters } = useSelector((state) => state.filter);

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
      min-height: 1200px;
    }
  }
`;

const Main = styled.main`
  background: var(--bg-products) center/ cover no-repeat;
`;

export default ProductsPage;
