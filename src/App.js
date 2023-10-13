import { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, []);

  return <h1>NOT FOUND</h1>;
  // return <Navigate to="/" />;
}
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: 'none' }} to="/products">
            PRODUCTS
          </Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
