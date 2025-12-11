import { 
  BestSelling, 
  Brands, 
  Categories, 
  Discover, 
  FlashSale, 
  Hero, 
  NewCollection, 
  Services, 
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
      <Brands />
    </>
  )
}

export default Home;
