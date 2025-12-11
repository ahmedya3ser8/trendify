import { BreadCrumb } from "@/features/main";
import AboutHero from "./components/AboutHero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutShopping from "./components/AboutShopping";
import AboutFashion from "./components/AboutFashion";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb pageTitle="About Us" />
      <AboutHero />
      <WhyChooseUs />
      <AboutShopping />
      <AboutFashion />
    </>
  )
}

export default AboutUs;
