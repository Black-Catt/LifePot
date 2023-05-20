import { FeaturedProducts, Hero, Services, Contact } from '../components';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
