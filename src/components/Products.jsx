import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  const PRODUCTS = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'bananas' },
    { id: 3, name: 'berry' },
  ];
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(p => {
          return (
            <li>
              <Link state={p} style={{ textDecoration: 'none' }} to={`/products/${p.id}`}>
                {p.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet context={products} />
    </div>
  );
};

export default Products;
