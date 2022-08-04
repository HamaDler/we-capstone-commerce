import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import { useSelector } from 'react-redux';

export default function Home() {
  const cart = useSelector((state) => state.cart);
  return (
    <Layout>
      {JSON.stringify(cart)}
      <HeroSection />
      <CategoriesSection />
    </Layout>
  );
}
