const NavSections = ({ item }: any) => {
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
    <ul className={`bg-white border border-[#D9D9D9] shadow-lg min-w-fit divide-y divide-[#E3E2DC] absolute top-14 hidden group-hover:block hover:block w-50 flex-col z-10`}>
      {sections.map((section, index) => (
        <li key={index} className="py-2 px-4 font-normal text-base transition-all hover:bg-[#F16126] hover:text-white">{section}
        </li>
      ))}
    </ul>
  )
}

export default NavSections