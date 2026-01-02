import Container from "./Container"
import SectionTitle from "./SectionTitle"
import Subtitle from "./Subtitle"

const PopularCategory = () => {
  const categories = [{
    img: "01.jpg",
    title: "computer science",
    course: 24,
    color: "#00A556"
  }, {
    img: "02.jpg",
    title: "civil engineering",
    course: 4,
    color: '#37B2C8',
  }, {
    img: "03.jpg",
    title: "business analysis",
    course: 27,
    color: "#EEC949"
  }, {
    img: "04.jpg",
    title: "data science analytics",
    course: 28,
    color: "#D1A1B7"
  }, {
    img: "05.jpg",
    title: "learning management",
    course: 78,
    color: "#FE7625"
  }, {
    img: "06.jpg",
    title: "computer engineering",
    course: 38,
    color: "#F79A3D"
  },]

  return (
    <div className="categoory-section py-17.5 lg:py-28 bg-white">
      <Container>
        <div className="header-content mb-12.5">
          <Subtitle text="Popular Category" className="text-center" />
          <SectionTitle text="Popular Category For Learn" />
        </div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
          {categories.map(({ img, title, course, color }, index) => (
            <div key={index} className="group hover:-translate-y-2 transition-all car py-10 px-7 w-full 
            shadow-[0_0_10px_#8787871a] rounded-md bg-white flex flex-col items-center gap-2">
              <img src={`/images/category/icon/${img}`} alt="" />
              <div className="title font-medium text-lg text-center capitalize group-hover:text-[#F16126] transition-all">{title}</div>
              <div className={`desc text-lg`} style={{
                color: color
              }}>{course < 10 ? "0" + course : course} Course
              </div>
            </div>
          ))}
        </div>
        <button className="browse-categories py-2.5 px-6 bg-[#F16126] text-white font-semibold rounded-sm place-self-center block mt-12 hover:-translate-y-1 hover:shadow-lg shadow-[#F16126]">
          Browse All Categories
        </button>
      </Container>
    </div>
  )
}

export default PopularCategory