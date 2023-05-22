import { useEffect, FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { RelatedProducts } from '../components';
import { useGetSingleProductQuery } from '../api/productsSlice';

const SingleProductPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: product,
    isLoading: loading,
    isError: error,
  } = useGetSingleProductQuery({ id: id! });

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    }
    //eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error || !product) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product={product} />
      <Inner className="section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
        <RelatedProducts product={product} />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--bg-products) center/ cover no-repeat;
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .product-center {
    background-color: var(--clr-white);
    padding: 20px;
    border-radius: 0.9rem 0.9rem 0 0;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding: 50px;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 768px) {
    .product-center {
      padding: 40px;
    }
  }
`;

const Inner = styled.div`
  padding-bottom: 5rem;
`;

export default SingleProductPage;
