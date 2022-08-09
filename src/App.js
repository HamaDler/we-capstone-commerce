import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { login } from './app/slices/authSlice';
import { useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Categories from './pages/Categories';
import Feedback from './pages/Feedback';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { updateCart } from './app/slices/cartSlice';
function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      dispatch(login(username));
    }

    // make a request to get the cart for user

    axios
      .get(`https://fakestoreapi.com/carts/5`)
      .then((response) => {
        // once the data is back
        console.log('getUserCart:', response.data);
        dispatch(updateCart(response.data.products));
        // send the cart information to the store
      })
      .catch((err) => {
        console.log(err);
      });

    i18n.changeLanguage(localStorage.getItem('language'));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="feedback" element={<Feedback />} />

        <Route path="products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
