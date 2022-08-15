import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../layouts/MainLayout';
import LoadingSpinner from '../components/LoadingSpinner';

import Rating from 'react-rating';

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

const yellowStar = (
  <svg
    aria-hidden="true"
    class="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const greyStar = (
  <svg
    aria-hidden="true"
    class="w-5 h-5 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

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
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <button onClick={() => document.documentElement.classList.add('dark')}>
        switch to dark mode
      </button>
      <div className="container mx-auto grid grid-cols-2 divide-x-2  border-red-500 bg-white dark:bg-gray-800 dark:text-gray-100 py-10">
        <div className="px-10">
          <h2 className="text-l font-medium mt-6 mb-2">{product.title}</h2>
          <p className="text-sm text-gray-500 text-justify">
            {product.description}
          </p>
          <div className="flex items-center mt-6">
            {/* <RatingStars rating={Math.floor(product.rating.rate)} /> */}
            {product.rating.rate}
            <Rating
              className="pt-2 mr-2"
              initialRating={product.rating.rate}
              fullSymbol={yellowStar}
              emptySymbol={greyStar}
              readonly={true}
            />
            <p className="text-gray-400">({product.rating.count} reviews)</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-3xl text-green-700">{product.price}$</p>

            <span className=" border border-indigo-600 rounded-xl text-indigo-600 text-lg p-1 ">
              {product.category.toUpperCase()}
            </span>
          </div>
          <div>
            <TwitterShareButton
              url={window.location.href}
              title="example title"
              via="WeCode"
              hashtags={['wecode', 'javascript', 'sharing', 'content']}
            >
              {' '}
              <TwitterIcon size={80} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon size={80} round />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="px-10">
          <img src={product.image} alt="product" />
        </div>
      </div>
    </Layout>
  );
}
