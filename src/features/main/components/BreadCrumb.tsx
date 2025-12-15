import { Link } from "react-router-dom";

import { MdOutlineArrowForwardIos } from "react-icons/md";

const BreadCrumb = ({ items }: { items: {label: string, path?: string}[] }) => {
  return (
    <div className="Breadcrumb py-10">
      <div className="container flex items-center space-x-2 text-gray-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center gap-2">
              {item.path ? (
                <Link to={item.path}> {item.label} </Link>
              ) : (
                <span> {item.label} </span>
              )}
              {!isLast && <MdOutlineArrowForwardIos />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BreadCrumb;
