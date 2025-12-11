import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#2E2E2E]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-12 xl:gap-20 text-white">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col gap-3">
            <h2 className="text-2xl">Trendify</h2>
            <p className="text-gray-300 text-xs sm:text-sm">Join Our newsletter to stay up to date on feautres and releases.</p>
            <div className="flex gap-2">
              <input type="email" className="w-full h-10 px-2 text-secondary bg-white outline-none rounded-lg" placeholder="Enter your email" />
              <button className="w-fit px-3 h-10 bg-main rounded-lg border border-white"> Subscribe </button>
            </div>
            <p className="text-gray-300 text-sm">
              By Subscribeing you agree to with our Privacy Policy 
              and provide consent to receive updates from our company
            </p>
          </div>
          <div className="col">
            <h2 className="text-xl sm:text-2xl mb-3">About Us</h2>
            <ul className="space-y-3">
              <li>FAQ</li>
              <li>Contact</li>
              <li>Returns</li>
              <li>Blog</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-xl sm:text-2xl mb-3">Customer Support</h2>
            <ul className="space-y-3">
              <li>Affiliates</li>
              <li>Apply Pay Payments</li>
              <li>Returns</li>
              <li>Returns Policy</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="col">
            <h2 className="text-xl sm:text-2xl mb-3">Follow Us</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"> <FaFacebook className="text-lg" /> Facebook </li>
              <li className="flex items-center gap-2"> <FaInstagram className="text-lg" /> Instagram </li>
              <li className="flex items-center gap-2"> <FaTwitter className="text-lg" /> Twitter </li>
              <li className="flex items-center gap-2"> <FaLinkedinIn className="text-lg" /> Linkedin </li>
            </ul>
          </div>
        </div>
        <div className="text-white flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 pt-10">
          <p>© 2025 Trendify. All right reserved</p>
          <ul className="flex items-center gap-6">
            <li className="text-sm">Privacy Policy</li>
            <li className="text-sm">Terms of Services</li>
            <li className="text-sm">Cookies Setting</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
