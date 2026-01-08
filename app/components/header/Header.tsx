import { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true)
      } else {
        setHeaderFixed(false)
      }
    })
  }, [])

  const handleSubMenuClick = (item: string) => {
    setOpenSubMenu(openSubMenu === item ? null : item);
  };

  const toggleInfoHeader = () => {
    setIsInfoOpen(!isInfoOpen);
  }

  return (
    <header className="absolute w-full">
      <HeaderTop isInfoOpen={isInfoOpen}/>
      <HeaderBottom headerFixed={headerFixed} openSubMenu={openSubMenu}
        handleSubMenuClick={handleSubMenuClick}
        toggleInfoHeader={toggleInfoHeader} />
    </header>
  )
}

export default Header