import { Link, Route, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NoFound from './components/NoFound';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';

function App() {
  let routeElements = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/products',
          element: <Products />,
          children: [
            {
              path: ':id',
              element: <ProductDetails />,
            },
          ],
        },
        {
          path: '*',
          element: <NoFound />,
        },
      ],
    },
  ]);

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
      {routeElements}
    </div>
  );
}

export default App;
