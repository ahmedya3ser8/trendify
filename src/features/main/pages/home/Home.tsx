import { 
  BestSelling, 
  Categories, 
  Discover, 
  FlashSale, 
  Hero, 
  NewCollection, 
  Services, 
  Testimonials, 
  TopProducts 
} from "../../components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FlashSale />
      <NewCollection />
      <BestSelling />
      <TopProducts />
      <Discover />
      <Services />
      <Testimonials />
    </>
  )
}

export default Home;
