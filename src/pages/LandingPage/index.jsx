import About from '../../components/About';
import Hero from '../../components/Hero';
import Layout from '../../components/Layouts';
import Works from '../../components/Works';

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <Works />
      <About />
    </Layout>
  );
};

export default LandingPage;
