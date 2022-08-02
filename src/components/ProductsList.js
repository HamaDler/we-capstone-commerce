import React from 'react';
import ProductCard from './ProductCard';
export default function ProductsList({ products }) {
  return (
    <div className="container bg-slate-300 mx-auto grid grid-cols-12 gap-10 object-fill">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
