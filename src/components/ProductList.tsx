import GridView from './GridView';
import ListView from './ListView';
import { FC } from 'react';
import { GlobalProductInDTO } from '../api/dto/product';
import { useAppSelector } from '../store/index';

interface ProductListProps {
  products: GlobalProductInDTO[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const { grid_view } = useAppSelector((state) => state.filter);
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductList;
