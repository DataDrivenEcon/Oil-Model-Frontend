import HeroSection from "../Components/HeroSection";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import Testimonials from "../Components/Testimonials";
import KeyBenefits from "../Components/KeyBenefits";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <KeyBenefits></KeyBenefits>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Testimonials></Testimonials>
      <Footer/>
    </>
  );
};

export default Home;
