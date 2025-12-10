import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";
import { FaArrowRightFromBracket, FaBars, FaCartShopping, FaRegHeart } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('access_trendify_token');
    navigate('/auth/login');
  }
  return (
    <header className="bg-white fixed w-full left-0 top-0 shadow-sm py-4">
      <div className="container flex justify-between items-center">
        <div className="logo text-3xl text-main font-bold"> Trendify </div>
        <ul className="nav_links hidden lg:flex space-x-4">
          <li> <NavLink to='/' className="text-secondary text-xl transition duration-300"> Home </NavLink> </li>
          <li> <NavLink to='/products' className="text-secondary text-xl transition duration-300"> Products </NavLink> </li>
          <li> <NavLink to='/about-us' className="text-secondary text-xl transition duration-300"> About Us </NavLink> </li>
          <li> <NavLink to='/contact-us' className="text-secondary text-xl transition duration-300"> Contact Us </NavLink> </li>
          <li> <NavLink to='/blog' className="text-secondary text-xl transition duration-300"> Blog </NavLink> </li>
        </ul>
        <ul className="nav_links flex items-center space-x-4">
          <li> <Link to='/wishlist'> <FaRegHeart className="text-2xl text-main" /> </Link> </li>
          <li> <Link to='/cart'> <FaCartShopping className="text-2xl text-main" /> </Link> </li>
          <button onClick={() => logout()}> <FaArrowRightFromBracket className="text-2xl text-main" /> </button>
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <button type="button" className="toggel_bars lg:hidden"> <FaBars className="text-2xl text-main" /> </button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col gap-4 p-4">
              <ul className="nav_links flex flex-col gap-4">
                <li>
                  <DrawerClose asChild>
                    <NavLink to='/' className="text-secondary text-xl p-2 transition duration-300"> Home </NavLink>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <NavLink to='/products' className="text-secondary p-2 text-xl transition duration-300"> Products </NavLink>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <NavLink to='/about-us' className="text-secondary p-2 text-xl transition duration-300"> About Us </NavLink>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <NavLink to='/contact-us' className="text-secondary p-2 text-xl transition duration-300"> Contact Us </NavLink>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <NavLink to='/blog' className="text-secondary p-2 text-xl transition duration-300"> Blog </NavLink>
                  </DrawerClose>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
        </ul>
      </div>
    </header>
  )
}

export default Header;
