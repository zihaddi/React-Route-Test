import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h4>This is real products</h4>
      <h2>{products.length}</h2>
      {
        products.map(product => <SingleProduct key={product.id} product= {product}></SingleProduct>)
      }
    </div>
  );
};

export default Products;