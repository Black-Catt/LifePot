import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
const Pagination = ({ children }) => {
  const { filtered_products: products } = useSelector((state) => state.filter);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { products: currentItems });
      })}
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
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
