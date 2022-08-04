import React from 'react';
import ProductCard from './ProductCard';
export default function ProductsList({ products }) {
  return (
    <div className="container  mx-auto p-10 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-10 object-fill">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
