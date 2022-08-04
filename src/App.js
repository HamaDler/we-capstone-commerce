import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { login } from './app/slices/authSlice';
import { useDispatch } from 'react-redux';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Categories from './pages/Categories';
import axios from 'axios';

import { updateCart } from './app/slices/cartSlice';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      dispatch(login(username));
    }

    // make a request to get the cart for user

    getUserCart();
  }, []);

  function getUserCart(userId) {
    console.log('getUserCarrt function gets called');
    axios
      .get(`https://fakestoreapi.com/carts/5`)
      .then((response) => {
        console.log('shopping cart:', response.data);
        // send the cart information to the store
        dispatch(updateCart(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
