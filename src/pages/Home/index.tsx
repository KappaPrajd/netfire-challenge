import GradientBox from '../../components/GradientBox';
import AdvertBar from '../../views/AdvertBar';
import ExampleSection from '../../views/ExampleSection';
import Footer from '../../views/Footer';
import HeroSection from '../../views/HeroSection';
import Navbar from '../../views/Navbar';
import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={s.advert}>
        <AdvertBar />
      </div>
      <div className={s.gradient}>
        <GradientBox />
      </div>
      <Navbar />
      <div className={s.hero}>
        <HeroSection />
      </div>
      <div className={s.example}>
        <ExampleSection />
      </div>
      <div className={s.gradient}>
        <GradientBox />
      </div>
      <div className={s.footer}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
