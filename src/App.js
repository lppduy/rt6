import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';

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
      </Routes>
    </div>
  );
}

export default App;
