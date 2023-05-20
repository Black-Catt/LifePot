import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { useAppSelector } from '../store/index';

import { FC } from 'react';
import { GlobalProductInDTO } from '../api/dto/product';
import ProductList from './ProductList';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
  const { filtered_products: products } = useAppSelector(
    (state) => state.filter
  );

  const [currentItems, setCurrentItems] = useState<GlobalProductInDTO[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ProductList products={currentItems} />
      <ReactPaginate
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-nav"
        nextLinkClassName="page-nav"
        activeLinkClassName="page-active"
        breakLabel="..."
        nextLabel={<GrFormNextLink />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrFormPreviousLink />}
      />
    </>
  );
};

export default Pagination;
