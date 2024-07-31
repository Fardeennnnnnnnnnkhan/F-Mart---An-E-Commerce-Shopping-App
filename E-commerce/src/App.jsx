import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Footer from './components/Footer';
import men_banner from './images/m_banner.jpg';
import women_banner from './images/w_banner.jpg';
import kid_banner from './images/kid_banner.jpg';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  const isLoginSignupPage = location.pathname === '/login';

  return (
    <div className="w-full h-screen">
      {!isLoginSignupPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category={'men'} />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category={'women'} />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category={'kids'} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      {!isLoginSignupPage && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;