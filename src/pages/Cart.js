import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Layout from '../layouts/MainLayout';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Cart() {
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/user/2`)
      .then((response) => {
        console.log('shopping cart:', response.data);
        setCart(response.data);
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
      Cart
      {JSON.stringify(cart)}
    </Layout>
  );
}
