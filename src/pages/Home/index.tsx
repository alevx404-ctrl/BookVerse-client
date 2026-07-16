import Hero from './Hero';
import FeaturedBooks from './FeaturedBooks';
import Categories from './Categories';
import WhyUs from './WhyUs';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedBooks />
      <Categories />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Newsletter />
    </div>
  );
}