import Image from "next/image";
import { FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaSkype, FaTwitter, FaUser, FaUsers, FaVimeoV } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import Logo from "../../public/images/logo/01.png"
import { LuMinus, LuPlus } from "react-icons/lu";
import NavSections from "./NavSections";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true)
      } else {
        setHeaderFixed(false)
      }
    })
  }, [])

  return (
    <header className="">
      <div className="max-w-6xl mx-auto">
        <div className="info-cta flex justify-between items-center">
          <div className="contact flex divide-x
              divide-[#E3E2DC]">
            <div className="phone flex items-center gap-3
                text-[#555555] py-4 px-6">
              <FaPhoneAlt size={14} />
              <span>+800-123-4567 6587</span>
            </div>
            <div className="address flex items-center gap-3
                text-[#555555] py-4 px-6">
              <FaMapMarkerAlt size={14} />
              <span>Beverley, New York 224 USA</span>
            </div>
          </div>
          <div className="social-media flex items-center">
            <span className="text-[#555555] text-lg mr-2">Find us on :</span>
            <ul className="social-icons flex items-center divide-x divide-[#E3E2DC]">
              <div className="p-5 cursor-pointer transition-all hover:-translate-y-1">
                <FaFacebookMessenger color="#F16126" />
              </div>
              <div className="p-5 cursor-pointer transition-all hover:-translate-y-1">
                <FaTwitter color="#F16126" />
              </div>
              <div className="p-5 cursor-pointer transition-all hover:-translate-y-1">
                <FaVimeoV color="#F16126" />
              </div>
              <div className="p-5 cursor-pointer transition-all hover:-translate-y-1">
                <FaSkype color="#F16126" />
              </div>
              <div className="p-5 cursor-pointer transition-all hover:-translate-y-1">
                <MdOutlineRssFeed color="#F16126" size={20} />
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className={`main-header border-t border-[#E3E2DC] ${headerFixed && "fixed top-0 bg-[#fdfdfd73] backdrop-blur-lg w-full z-10 border-none"}`}>
        {/* fixed w-full top-0 */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="logo">
              <Image src={Logo} alt="Site Logo" objectFit="cover" />
            </div>
            <div className="content flex gap-12 items-center">
              <nav>
                <ul className="flex gap-5">
                  {["home", "courses", "blog", "pages", "contact"].map((item, index) => (
                    <li key={index} className="py-4 flex items-center gap-2 capitalize font-bold cursor-pointer relative group">
                      <span>{item}</span>
                      {item != "contact" && (
                        <>
                          <LuPlus className="transition-all duration-150   group-hover:opacity-0" />
                          <LuMinus className="absolute right-0 opacity-0 transition-all duration-150   group-hover:opacity-100" />
                          <NavSections item={item} />
                        </>
                      )}

                    </li>
                  ))}
                </ul>
              </nav>
              <div className="auth-actions flex">
                <button className="p-4 flex gap-1 items-center bg-white
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