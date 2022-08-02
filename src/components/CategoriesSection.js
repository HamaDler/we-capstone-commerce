import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import LoadingSpinner from './LoadingSpinner';
export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto">
      <p className="text-2xl text-center my-8 lg:my-10">Our Categories</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {categories.map((category, index) => {
          return <CategoryCard title={category} key={index} />;
        })}
      </div>
    </div>
  );
}
