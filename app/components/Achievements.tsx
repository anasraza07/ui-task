import Subtitle from "./Subtitle";
import SectionTitle from "./SectionTitle";
import Container from "./Container";

const Achievements = () => {
  return (
    <div className="py-17.5 lg:py-28 bg-white bg-[url(/images/achievments/bg.png)] cover bg-position-[50%] bg-no-repeat">
      <Container>
        <div className="header mb-7.5">
          <Subtitle text="START TO SUCCESS" />
          <SectionTitle text="Achieve Your Goals With Edukon" />
        </div>
        <div className="achievement-counts grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12.5">
          <div className="count text-center pt-1.25 px-7.5 sm:p-7.5">
            <h3 className="mb-2 text-2xl sm:text-[40px] font-semibold">30+</h3>
            <p className="text-[#555] text-lg">Years of Language Education Experience</p>
          </div>
          <div className="count text-center pt-1.25 px-7.5 sm:p-7.5">
            <h3 className="mb-2 text-2xl sm:text-[40px] font-semibold">3084+</h3>
            <p className="text-[#555] text-lg">Learners Enrolled in Edukon Courses</p>
          </div>
          <div className="count text-center pt-1.25 px-7.5 sm:p-7.5">
            <h3 className="mb-2 text-2xl sm:text-[40px] font-semibold">2300+</h3>
            <p className="text-[#555] text-lg">Innovative Foreign Language Courses</p>
          </div>
          <div className="count text-center pt-1.25 px-7.5 sm:p-7.5">
            <h3 className="mb-2 text-2xl sm:text-[40px] font-semibold">30+</h3>
            <p className="text-[#555] text-lg">Years of Language Education Experience</p>
          </div>
        </div>
        <div className="cta-cards space-y-6 lg:space-y-0 lg:gap-6 lg:flex  items-center">
          <div className="teaching-card overflow-hidden relative p-7.5 bg-white shadow-xl rounded-sm">
            <div className="image mb-5 sm:mb-0 sm:w-[65%] sm:absolute bottom-0 -right-15">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/achive/01.png" alt="" />
            </div>
            <div className="content w-[60%]">
              <h3 className="mb-2 text-2xl font-semibold">Start Teaching Today</h3>
              <p className="text-lg text-[#555] mb-6.25">Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
              <button className="cta-btn bg-[#F9E8B0] py-2.5 px-7.5 text-[#101115] font-semibold cursor-pointer rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">Become A Instructor</button>
            </div>
          </div>
          <div className="course-card overflow-hidden relative p-7.5 bg-white shadow-xl rounded-sm">
            <div className="image mb-5 sm:mb-0 sm:w-[65%] sm:absolute bottom-0 -right-15">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/achive/02.png" alt="" />
            </div>
            <div className="content w-[60%]">
              <h3 className="mb-2 text-2xl font-semibold">If You Join Our Course</h3>
              <p className="text-lg text-[#555] mb-6.25">Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
              <button className="cta-btn bg-[#26C976] py-2.5 px-7.5 text-white font-semibold cursor-pointer rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">Register For Free</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Achievements