import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Testimonials from "../Components/Testimonials";
import KeyBenefits from "../Components/KeyBenefits";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProducts from "../Components/OurProducts";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <HeroSection></HeroSection>
      <OurProducts></OurProducts>
      <KeyBenefits></KeyBenefits>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer />
    </>
  );
};

export default Home;
