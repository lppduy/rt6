import React from 'react';
import { useLocation, useParams, useOutletContext } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  const location = useLocation();
  return (
    <div>
      <h1>ProductDetails - {id}</h1>
      {/* <h2>{JSON.stringify(obj[id - 1])}</h2> */}
      <h2>{JSON.stringify(location.state)}</h2>
    </div>
  );
};

export default ProductDetails;
