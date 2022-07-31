import React, { useEffect } from 'react';
import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
    </Layout>
  );
}
