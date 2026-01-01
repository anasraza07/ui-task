import { IoSearchOutline } from "react-icons/io5"
import Container from "./Container"

const HeroSection = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[url(/images/bg/banner.jpg)] bg-cover pt-37.5">
      <Container>
        <div className="flex relative">
          <div className="content pt-28 space-y-4">
            <div className="sub-heading text-[#F16126] letter-spacing-[1px] uppercase font-semibold tracking-widest text-lg ">Online education</div>
            <h1 className="text-6xl font-bold">
              <span className="block leading-16">Learn The <span className="block leading-16">Skills You Need</span> To Succeed
              </span>
            </h1>
            <p className="text-[#555555] text-lg max-w-lg">Free online courses from the world's Leading experts. join 18+ million Learners today.</p>

            <div className="form flex relative shadow-lg rounded-sm my-6">
              <div className="absolute px-3 place-content-center h-full"><IoSearchOutline size={20} color="#555" /></div>
              <input type="text" placeholder="Keywords of your course" className="bg-white flex-1 pl-11 pr-4 border-none outline-none" />
              <button className="p-4 flex gap-1 items-center bg-[#F16126] text-white cursor-pointer">Search Courses</button>
            </div>

            <div className="keywords flex gap-2">
              <span className="text-[#555] text-lg">Most Popular :</span>
              <div className="links space-x-4">
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

          <div className="image flex-1 h-full">
            <img src="/images/banner/01.png" alt="banner img" className="w-[90%] relative z-9" />
          </div>

          <div className="round-shape rounded-full w-175 h-175 border border-dashed border-[#ff70d2] absolute top-[15%] -right-20 p-14 animate-slow-spin">
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