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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      dispatch(login(username));
    }
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
        <Route path="Categories" element={<Categories />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
