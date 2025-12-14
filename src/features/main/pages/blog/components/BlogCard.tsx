import formateDate from "@/utils/formatedDate";

const BlogCard = ({ item }: { item: string }) => {
  return (
    <div className='blog bg-white rounded-lg overflow-hidden shadow-md transition duration-700 hover:-translate-y-4'>
      <div className="blog_image">
        <img src={item} className='w-full' alt="blog_image" />
      </div>
      <div className="blog_content flex flex-col gap-3 p-4">
        <div className="flex justify-between">
          <span className='text-[#475467]'>Fashion</span>
          <span className='text-[#475467]'>{formateDate(new Date())}</span>
        </div>
        <h3 className='text-secondary text-xl font-bold'>The perfect Shopify theme</h3>
        <p className='text-[#475467] text-sm md:text-base line-clamp-2'>
          Shopify is the second most popular eCommerce store builder in the world. 
          You can use Shopify in nearly every coun 
        </p>
      </div>
    </div>
  )
}

export default BlogCard;
