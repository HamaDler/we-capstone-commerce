import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layouts/MainLayout';
import LoadingSpinner from '../components/LoadingSpinner';
import RatingStars from '../components/RatingStars';

export default function Product() {
  let { id } = useParams();

  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log('list of products:', response.data);
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto grid grid-cols-2 divide-x-2  border-red-500 bg-white py-10">
        <div className="px-10">
          <h2 className="text-l font-medium mt-6 mb-2">{product.title}</h2>
          <p className="text-sm text-gray-500 text-justify">
            {product.description}
          </p>
          <div>
            <RatingStars rating={Math.floor(product.rating.rate)} />
          </div>

          <div className="flex justify-between mt-8">
            <p className="text-xl text-green-700">40$</p>

            <button className=" border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1 ">
              {product.category.toUpperCase()}
            </button>
          </div>
        </div>
        <div className="px-10">
          <img src={product.image} alt="product" />
        </div>
      </div>
    </Layout>
  );
}
