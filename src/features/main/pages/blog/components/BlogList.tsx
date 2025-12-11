import BlogCard from './BlogCard';

import blogImg1 from '@/assets/images/blogs/blog-1.png';
import blogImg2 from '@/assets/images/blogs/blog-2.png';
import blogImg3 from '@/assets/images/blogs/blog-3.png';
import blogImg4 from '@/assets/images/blogs/blog-4.png';
import blogImg5 from '@/assets/images/blogs/blog-5.png';
import blogImg6 from '@/assets/images/blogs/blog-6.png';

const BlogList = () => {
  return (
    <section className="py-10 lg:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6].map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList;
