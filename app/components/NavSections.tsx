const NavSections = ({ item, isOpen }: any) => {
  let sections: any[] = [];
  switch (item) {
    case "home": sections = ["home one", "home two", "home three", "home four", "home five", "home six", "home seven"];
      break;
    case "courses": sections = ["course", "course details", "course view"];
      break;
    case "blog": sections = ["blog grid", "blog style 2", "blog style 3", "blog style 4"];
      break;
    case "pages": sections = ["about", "team", "instructor", "shop page", "shop details page", "shop cart page", "search page", "search none", "404"];
      break;
    case "contact": sections = [];
      break;
    default:
      break;
  }

  return (
    <ul className={`bg-[#F16126] text-white lg:text-black lg:bg-white lg:border lg:border-[#D9D9D9] lg:shadow-lg min-w-fit divide-y lg:divide-[#E3E2DC] divide-[] relative lg:absolute top-full lg:top-14 ${isOpen ? "block" : "hidden"} lg:hidden lg:group-hover:block hover:block w-full lg:w-50 z-20`}>
      {sections.map((section, index) => (
        <li key={index} className="py-2 lg:px-4 font-normal text-base transition-all hover:bg-[#F16126] hover:text-white">{section}
        </li>
      ))}
    </ul>
  )
}

export default NavSections