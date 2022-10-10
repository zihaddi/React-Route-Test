import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
  console.log(product)
  const {id,name, username} = product
  return (
    <div className='singlepost-design'>
      <h2>Name : {name}</h2>
      <p>user_name : <Link to={`/product/${id}`}>{username}</Link> </p>
    </div>
  );
};

export default SingleProduct;