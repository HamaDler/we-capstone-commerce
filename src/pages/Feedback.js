import React, { useEffect, useState } from 'react';
import Layout from '../layouts/MainLayout';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import Select from 'react-select';
export default function Feedback() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log('list of products:', response.data);
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (products) {
      const filtered = products.map(({ id, title, price, ...rest }) => {
        return { value: price, label: title };
      });
      console.log('successfully filtered users', filtered);
      setOptions(filtered);
    }
  }, [products]);

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  // make a GET req to get products

  // filter them so that each product has value, label

  // import react select

  // pass in the option (filtered array of object)

  return (
    <Layout>
      <Select
        options={options}
        onChange={(selected) => alert(JSON.stringify(selected.label))}
      />
    </Layout>
  );
}
