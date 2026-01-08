import Container from '../common/Container';
import Image from 'next/image';
import Logo from "../../../public/images/logo/01.png";
import { LuMinus, LuPlus } from "react-icons/lu";
import NavSections from '../NavSections';
import { BiSolidInfoSquare } from 'react-icons/bi';
import { RiCloseLargeFill } from 'react-icons/ri';
import { TfiMenu } from 'react-icons/tfi';
import { FaUser, FaUsers } from 'react-icons/fa';
import { useState } from 'react';

const HeaderBottom = ({ headerFixed, handleSubMenuClick, openSubMenu, toggleInfoHeader }: {
  headerFixed: boolean,
  handleSubMenuClick: (item: string) => void,
  openSubMenu: string | null,
  toggleInfoHeader: () => void
}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`absolute w-full main-header border-t border-[#E3E2DC] transition-all duration-0 ${headerFixed && "fixed top-0 bg-[#fdfdfd73] backdrop-blur-xl z-20 border-none shadow-md"}`}>
      <Container>
        <div className="relative flex items-center justify-between py-4.75">
          <div className="logo">
            <Image src={Logo} alt="Site Logo" objectFit="cover" />
          </div>
          <div className="content flex gap-12 items-center">
            <nav className="">
              <ul className={`z-20 flex flex-col lg:flex-row lg:gap-5 bg-[#f16126] divide-y lg:divide-none divide-[#F2713C] max-h-100 overflow-y-auto lg:overflow-visible lg:bg-transparent text-white lg:text-black w-full absolute lg:relative top-full left-0 transition-all duration-300 origin-top ${isMenuOpen ? "scale-y-105" : "scale-y-0"} lg:scale-y-100`}>
                {["home", "courses", "blog", "pages", "contact"].map((item, index) => (
                  <li key={index} className={`py-2.5 ${openSubMenu == item && "pb-0"} px-6.25 lg:px-0 lg:py-4 capitalize font-bold cursor-pointer relative group`}>
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
                            {openSubMenu === item ?
                              <LuMinus /> :
                              <LuPlus />}
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
            <div className="actions flex items-center gap-7.5">
              <div className="hidden md:flex items-center">
                <button className="p-4 flex gap-1 items-center bg-white
                text-[#F16126]"><FaUser /> LOG IN</button>
                <button className="p-4 flex gap-1 items-center bg-[#F16126] text-white"><FaUsers size={18} /> SIGN UP</button>
              </div>
              <div className="menu-actions flex items-center gap-5 text-[#F26830] lg:hidden">
                {!isMenuOpen ?
                  <TfiMenu size={24} className="cursor-pointer"
                    onClick={() => setIsMenuOpen(true)} /> : <RiCloseLargeFill size={24} className="cursor-pointer"
                      onClick={() => setIsMenuOpen(false)} />}
                <BiSolidInfoSquare size={24} className="cursor-pointer" onClick={toggleInfoHeader} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeaderBottom