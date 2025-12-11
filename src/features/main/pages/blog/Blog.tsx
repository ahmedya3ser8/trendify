import { BreadCrumb } from "@/features/main";
import BlogTitle from "./components/BlogTitle";
import BlogList from "./components/BlogList";

const Blog = () => {
  return (
    <>
      <BreadCrumb />
      <BlogTitle />
      <BlogList />
    </>
  )
}

export default Blog;
