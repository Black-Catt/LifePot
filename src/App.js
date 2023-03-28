import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { countCartTotals } from '../src/store/cartSlice';
import { fetchProducts } from './store/productsSlice';
import { products_url as url } from '../src/utils/constants';

import {
  Home,
  Products,
  SingleProduct,
  About,
  Error,
  PrivateRoute,
  Cart,
  Checkout,
  AuthWrapper,
} from './pages';

function App() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts(url));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(countCartTotals());
    localStorage.setItem('cart', JSON.stringify(cart));
    // eslint-disable-next-line
  }, [cart]);

  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
