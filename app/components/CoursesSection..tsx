import { TfiVideoClapper } from "react-icons/tfi";
import { BiSignal4 } from "react-icons/bi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Subtitle from "./Subtitle";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const CoursesSection = () => {
  return (
    <div className="courses-section py-17.5 lg:py-28 bg-[#FFF9F1]">
      <Container>
        <div className="header-content mb-12.5">
          <Subtitle text="Featured Courses" />
          <SectionTitle text="Pick A Course To Get Started"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="grid-item p-4 bg-white rounded-md shadow-md
              group ">
              <div className="view relative">
                <div className="image overflow-hidden">
                  <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/course/01.jpg" alt="" className="group-hover:scale-105 transition-all duration-200 w-full" />
                </div>
                <div className="price-tag w-14 h-14 rounded-full bg-[#F16126] place-content-center align-middle text-center font-bold text-xl text-white absolute -bottom-5 right-5">$30</div>
              </div>
              <div className="content py-6 px-3 group">
                <div className="flex items-center gap-5">
                  <div className="badge bg-[#F16126] flex items-center gap-2 w-fit py-1 px-3 rounded-md">
                    <span className="bg-white inline-block opacity-50 w-1.5 h-1.5 rounded-full"></span>
                    <span className="text-white text-sm font-semibold">Adobe XD</span>
                  </div>
                  <div className="reviews text-[#555555]">
                    03 reviews
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold leading-7 my-3 group-hover:text-[#F16126] transition-allb duration-200">Fundamentals of Adobe XD Theory Learn New
                </h3>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2 items-center">
                    <TfiVideoClapper color="#F17042" />
                    <p className="text-lg text-[#555555]">18x Lesson</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BiSignal4 color="#F17042" />
                    <p className="text-lg text-[#555555]"> Online Class</p>
                  </div>
                </div>
              </div>
              <div className="footer border-t border-[#ECF0F3] pt-4 px-3 flex justify-between">
                <div className="tutor">
                  <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/course/author/05.jpg " alt="" />
                  <div className="name text-[#555555] text-lg font-medium">William Smith</div>
                </div>
                <div className="ctc flex items-center gap-2 text-[#555555]">
                  <span className="text-lg font-medium">Read More</span>
                  <FaArrowUpRightFromSquare color="#F17042" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default CoursesSection;