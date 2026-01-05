import { IoSearchOutline } from "react-icons/io5"
import Container from "./Container"

const HeroSection = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[url(/images/bg/banner.jpg)] bg-cover pt-42.5 sm:pt-53.75">
      <Container>
        <div className="flex flex-col xl:flex-row relative">
          <div className="content">
            <h2 className="sub-heading text-[#F16126] uppercase font-semibold tracking-[5px] text-lg mb-2">Online education</h2>
            <h1 className="text-2xl lg:text-[66px] font-bold mb-3.75 leading-[1.1]">
              <span className="lg:block">Learn The </span> Skills You Need <span className="lg:block">To Succeed</span>
            </h1>
            <p className="text-[#555555] text-lg lg:text-[20px] max-w-lg mb-6.25">Free online courses from the world's Leading experts. join 18+ million Learners today.</p>

            <div className="form flex relative shadow-lg rounded-sm my-6">
              <div className="absolute px-3 place-content-center h-full">
                <IoSearchOutline size={20} color="#555" />
              </div>
              <input type="text" placeholder="Keywords of your course" className="bg-white 
              py-4.5 pl-10 pr-4.5 border-none outline-none w-[calc(100%-140px)]" />
              <button className="py-3.25 px-3.75 items-center bg-[#F16126] text-white cursor-pointer">Search Courses</button>
            </div>

            <div className="keywords flex items-center flex-wrap gap-2">
              <p className="text-[#555] text-lg">Most Popular:</p>
              <div className="links flex flex-wrap  space-x-4">
                <a href="#" className="underline font-medium transition-all duration-200 
              hover:text-[#F16126]">Figma</a>
                <a href="#" className="underline font-medium transition-all duration-200 
              hover:text-[#F16126]">Adobe XD</a>
                <a href="#" className="underline font-medium transition-all duration-200 
              hover:text-[#F16126]">illustration</a>
                <a href="#" className="underline font-medium transition-all duration-200 
              hover:text-[#F16126]">Photoshop</a>
              </div>
            </div>
          </div>

          <div className="image w-full mt-7.5 lg:mt-0 md:w-[50%]">
              <img src="/images/banner/01.png" alt="banner img" className="w-full relative z-10" />
            </div>

          <div className="hidden xl:block round-shape rounded-full w-175 h-175 border border-dashed border-[#ff70d2] absolute top-0 -right-20 p-14 animate-slow-spin">
            <div className="round-shape rounded-full w-full h-full border border-dashed border-[#8b74ff] p-14">
              <div className="round-shape rounded-full w-full h-full border border-dashed border-[#fdca92]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection