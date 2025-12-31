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
    <div className="categoory-section py-28">
      <div className="max-w-5xl mx-auto">
        <div className="header-content mb-12">
          <span className="sub-heading text-[#F16126] letter-spacing-[1px] uppercase font-semibold tracking-[0.3em] text-lg text-center block">Popular Category</span>
          <h2 className="text-center text-4xl font-bold my-4">Popular Category For Learn</h2>
        </div>
        <div className="cards flex gap-2">
          {categories.map(({ img, title, course, color }, index) => (
            <div key={index} className="group hover:-translate-y-2 transition-all car py-10 px-7 min-w-[calc(100%/6)] shadow-md rounded-md bg-white flex flex-col items-center gap-3">
              <img src={`/images/category/icon/${img}`} alt="" />
              <div className="title font-semibold text-center capitalize group-hover:text-[#F16126] transition-all">{title}</div>
              <div className={`desc font-semibold`} style={{
                color: color
              }}>{course < 10 ? "0" + course : course} Course
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularCategory