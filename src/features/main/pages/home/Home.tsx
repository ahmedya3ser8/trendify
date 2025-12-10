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
} from "@/features/main/pages/home/components";

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
