import collectionImg1 from '@/assets/images/home/collections/collection-1.png';
import collectionImg2 from '@/assets/images/home/collections/collection-2.webp';
import collectionImg3 from '@/assets/images/home/collections/collection-3.webp';
import MainTitle from '@/features/main/components/MainTitle';

const NewCollection = () => {
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title='New Collection' description='Check the new Collection' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col h-[300px] lg:h-[500px] relative rounded-lg overflow-hidden">
            <img src={collectionImg1} className='w-full h-full object-cover' alt="collection_image" />
            <div className="collection_content absolute inset-0 bg-black/30 text-white flex flex-col gap-3 justify-center items-center">
              <h4 className='text-3xl'>Shoes</h4>
              <p className='text-3xl'>up to 50% off</p>
            </div>
          </div>
          <div className="col space-y-6 md:space-y-4">
            <div className="col h-[300px] md:h-[142px] lg:h-[242px] relative rounded-lg overflow-hidden">
              <img src={collectionImg2} className='w-full h-full object-cover' alt="collection_image" />
              <div className="collection_content absolute inset-0 bg-black/30 text-white flex flex-col gap-3 justify-center items-center">
                <h4 className='text-3xl'>Bags</h4>
                <p className='text-3xl'>up to 50% off</p>
              </div>
            </div>
            <div className="col h-[300px] md:h-[142px] lg:h-[242px] relative rounded-lg overflow-hidden">
              <img src={collectionImg3} className='w-full h-full object-cover' alt="collection_image" />
              <div className="collection_content absolute inset-0 bg-black/30 text-white flex flex-col gap-3 justify-center items-center">
                <h4 className='text-3xl'>Accessories</h4>
                <p className='text-3xl'>up to 50% off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewCollection;
