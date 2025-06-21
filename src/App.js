import './App.css';
import Header from './components/Header/Header';
import  HeroSectionOne  from './components/Hero/HeroSectionOne'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <Header />
      <HeroSectionOne />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
