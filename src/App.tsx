import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { countCartTotals } from './store/cartSlice';
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
import { useAppSelector, useAppDispatch } from './store/index';

interface AppProps {}

const App: FC<AppProps> = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
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
};

export default App;
