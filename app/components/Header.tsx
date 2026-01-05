import Image from "next/image";
import { FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaSkype, FaTwitter, FaUser, FaUsers, FaVimeoV } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import Logo from "../../public/images/logo/01.png"
import { LuMinus, LuPlus } from "react-icons/lu";
import NavSections from "./NavSections";
import { useEffect, useState } from "react";
import Container from "./Container";
import { FiMenu } from "react-icons/fi";
import { BiSolidInfoSquare } from "react-icons/bi";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuClick = (item: string) => {
    setOpenSubMenu(openSubMenu === item ? null : item);
  };

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
    <header className="absolute w-full">
      <Container>
        <div className="hidden info-cta lg:flex justify-between items-center">
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
      </Container>

      <div className={`w-full main-header border-t border-[#E3E2DC] transition-all duration-300 ${headerFixed && "fixed top-0 bg-[#fdfdfd73] backdrop-blur-xl w-full z-20 border-none shadow-md"}`}>
        <Container>
          <div className="relative flex items-center justify-between py-4.75">
            <div className="logo">
              <Image src={Logo} alt="Site Logo" objectFit="cover" />
            </div>
            <div className="content flex gap-12 items-center">
              <nav className="">
                <ul className={`z-20 flex flex-col lg:flex-row lg:gap-5 bg-[#f16126] divide-y lg:divide-none divide-[#F2713C] max-h-100 overflow-y-auto lg:overflow-visible lg:bg-transparent text-white lg:text-black w-full absolute lg:relative top-full left-0 transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-105" : "scale-y-0"} lg:scale-y-100`}>
                  {["home", "courses", "blog", "pages", "contact"].map((item, index) => (
                    <li key={index} className="py-2.5 px-6.25 lg:px-0 lg:py-4 capitalize font-bold cursor-pointer relative group">
                      <a href="#" className="flex justify-between lg:justify-start items-center gap-2"
                        onClick={() => item != "contact"
                          && handleSubMenuClick(item)}>
                        <span>{item}</span>
                        {item != "contact" && (
                          <>
                            <span className="hidden lg:block relative">
                              <LuPlus className="transition-all duration-150 group-hover:opacity-0" />
                              <LuMinus className="absolute top-0 right-6.25 lg:right-0 opacity-0 transition-all duration-150 group-hover:opacity-100" />
                            </span>

                            <span className="lg:hidden">
                              {openSubMenu === item ? <LuMinus /> : <LuPlus />}
                            </span>
                          </>
                        )}
                      </a>
                      {item != "contact" && <NavSections item={item}
                        isOpen={openSubMenu === item} />}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="auth-actions flex items-center gap-7.5">
                <div className="hidden md:flex items-center">
                  <button className="p-4 flex gap-1 items-center bg-white
                text-[#F16126]"><FaUser /> LOG IN</button>
                  <button className="p-4 flex gap-1 items-center bg-[#F16126] text-white"><FaUsers size={18} /> SIGN UP</button>
                </div>
                <div className="menu-actions flex items-center gap-5 text-[#F26830] lg:hidden">
                  {!isMenuOpen ? <TfiMenu size={24} className="cursor-pointer"
                    onClick={() => setIsMenuOpen(true)} />
                    : <RiCloseLargeFill size={24} className="cursor-pointer"
                      onClick={() => setIsMenuOpen(false)} />}
                  <BiSolidInfoSquare size={24} className="cursor-pointer" />

                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header