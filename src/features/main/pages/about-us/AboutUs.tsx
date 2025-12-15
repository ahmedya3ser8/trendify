import { BreadCrumb } from "@/features/main";
import AboutHero from "./components/AboutHero";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutShopping from "./components/AboutShopping";
import AboutFashion from "./components/AboutFashion";

const AboutUs = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'About Us'}]} />
      <AboutHero />
      <WhyChooseUs />
      <AboutShopping />
      <AboutFashion />
    </>
  )
}

export default AboutUs;
