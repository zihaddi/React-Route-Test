import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const detail = useLoaderData();
  return (
    <div className='singlepost-design'>
      <h1>This is Each Product Details portion</h1>
      <h4>Name : {detail.name}</h4>
      <h5>Phone : {detail.phone}</h5>
      <Link to='/products'>Go Back</Link>
    </div>
  );
};

export default ProductDetails;