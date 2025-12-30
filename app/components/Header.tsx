import Image from "next/image";
import { FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaSkype, FaTwitter, FaUser, FaUsers, FaVimeoV } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import Logo from "../../public/images/logo/01.png"
import { LuMinus, LuPlus } from "react-icons/lu";
import { TiMinus } from "react-icons/ti";
import NavSections from "./NavSections";

const Header = () => {
  return (
    <header className="">
      <div className="max-w-6xl mx-auto">
        <div className="info-cta flex justify-between items-center">
          <div className="contact flex divide-x
              divide-[#E3E2DC]">
            <div className="phone flex items-center gap-3
                text-[#555555] p-4">
              <FaPhoneAlt size={14} />
              <span>+800-123-4567 6587</span>
            </div>
            <div className="address flex items-center gap-3
                text-[#555555] p-4">
              <FaMapMarkerAlt />
              <span>Beverley, New York 224 USA</span>
            </div>
          </div>
          <div className="social-media flex items-center">
            <span>Find us on :</span>
            <div className="social-icons flex divide-x divide-[#E3E2DC]">
              <div className="p-4 cursor-pointer transition-all hover:-translate-y-1">
                <FaFacebookMessenger color="#F16126" size={18} />
              </div>
              <div className="p-4 cursor-pointer transition-all hover:-translate-y-1">
                <FaTwitter color="#F16126" size={18} />
              </div>
              <div className="p-4 cursor-pointer transition-all hover:-translate-y-1">
                <FaVimeoV color="#F16126" size={18} />
              </div>
              <div className="p-4 cursor-pointer transition-all hover:-translate-y-1">
                <FaSkype color="#F16126" size={18} />
              </div>
              <div className="p-4 cursor-pointer transition-all hover:-translate-y-1">
                <MdOutlineRssFeed color="#F16126" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header border-t border-[#E3E2DC]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="logo">
              <Image src={Logo} alt="Site Logo" objectFit="cover" />
            </div>
            <div className="content flex gap-8   items-center">
              <nav>
                <ul className="flex gap-4">
                  {["home", "courses", "blog", "pages", "contact"].map((item, index) => (
                    <li key={index} className="py-4 flex items-center gap-2 capitalize font-bold cursor-pointer relative group">
                      <span>{item}</span>
                      {item != "contact" && (
                        <>
                          <LuPlus className="transition-all duration-150   group-hover:opacity-0" />
                          <LuMinus className="absolute right-0 opacity-0 transition-all duration-150   group-hover:opacity-100" />
                        </>
                      )}
                      <NavSections item={item} />
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="auth-actions flex">
                <button className="p-4 flex gap-1 items-center 
                text-[#F16126]"><FaUser /> LOG IN</button>
                <button className="p-4 flex gap-1 items-center bg-[#F16126] text-white"><FaUsers size={18} /> SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header