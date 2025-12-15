import { BreadCrumb } from "@/features/main";
import BlogTitle from "./components/BlogTitle";
import BlogList from "./components/BlogList";

const Blog = () => {
  return (
    <>
      <BreadCrumb items={[{label: 'Home', path: '/'}, {label: 'Blog'}]} />
      <BlogTitle />
      <BlogList />
    </>
  )
}

export default Blog;
