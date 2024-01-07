import About from '../components/about/About';
import Clients from '../components/clients/Clients';
import Featured from '../components/featured/Featured';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Possible from '../components/possible/Possible';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Possible />
      <Featured />
      <Clients />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
