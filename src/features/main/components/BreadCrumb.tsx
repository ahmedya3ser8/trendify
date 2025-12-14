import { Link } from "react-router-dom";

import { MdOutlineArrowForwardIos } from "react-icons/md";

const BreadCrumb = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="Breadcrumb py-10">
      <div className="container flex items-center space-x-2 text-gray-500">
        <Link to='/' className="text-main font-semibold"> Home </Link> 
        <MdOutlineArrowForwardIos /> 
        {pageTitle === 'Category' ? (
          <Link to='/products'>{pageTitle}</Link>
        ): (
          <span>{pageTitle}</span>
        )}
      </div>
    </div>
  )
}

export default BreadCrumb;
