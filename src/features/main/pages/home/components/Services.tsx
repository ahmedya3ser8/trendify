import { MainTitle } from "@/features/main";
import { useState } from "react";

import { FaRegLightbulb, FaHeadphonesAlt, FaTruck } from "react-icons/fa";

const Services = () => {
  const [itemsList] = useState([
    {
      id: 1,
      icon: <FaRegLightbulb />,
      title: 'Inspiration',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
    },
    {
      id: 2,
      icon: <FaHeadphonesAlt />,
      title: '24/7 Customer Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: 'Express Shipping',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis est, quod dicta eveniet ea itaque'
    },
  ])
  return (
    <section className="py-10">
      <div className="container">
        <MainTitle title="Services" description="Benefits when using our services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsList.map((item) => (
            <div key={item.id} className="service_card bg-white p-4 border border-gray-300 rounded-lg flex flex-col gap-3 group">
              <span className="bg-gray-200 size-10 rounded-full flex justify-center items-center border-2 border-main transition duration-300 group-hover:bg-main group-hover:text-white">
                {item.icon}
              </span>
              <h3 className="text-secondary text-xl"> {item.title} </h3>
              <p className="text-gray-500 2xl:text-xl"> {item.description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
