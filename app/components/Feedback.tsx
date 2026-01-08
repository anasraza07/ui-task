import Subtitle from "./common/Subtitle";
import Container from "./common/Container";
import { FaPlay } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="feedback bg-white bg-[url(/images/feedback/bg.png)] py-17.5 lg:py-28 -z-1 bg-position-[50%] bg-no-repeat">
      <Container>
        <div className="header-content mb-12">
          <Subtitle text="Loved by 200,000+ students" />
          <h2 className="text-center text-[#101115] text-2xl sm:text-[40px] font-bold mb-2">Students Community Feedback</h2>
        </div>
        <div className="row flex flex-col lg:flex-row">
          <div className="col lg:w-1/2">
            <div className="image border-10 border-white rounded-sm shadow-md mb-5 relative">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/feedback/01.jpg" alt="" className="w-full" />
              <a href="" className="absolute top-1/2 left-1/2 -translate-1/2 transition-all hover:text-black text-[#f16126]">
                <div className="relative w-15 sm:w-23 h-15 sm:h-23 text-2xl sm:text-3xl bg-white rounded-full place-content-center place-items-center">
                  <FaPlay />
                  <span className="absolute w-full h-full bg-white top-0 left-0 rounded-full -z-1 animate-video-play"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="col lg:w-1/2 space-y-5">
            <div className="card bg-white py-5 sm:py-2.5 px-7.5 rounded-sm shadow-md">
              <div className="flex border-b border-[#ecf0f3] py-3.75 space-x-2.5">
                <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/feedback/student/01.jpg" alt="" />
                <div>
                  <h4 className="text-lg font-semibold">Oliver Beddows</h4>
                  <p className="text-lg text-[#555]">UX designer</p>
                </div>
              </div>
              <div className="pt-5 pb-2.5">
                <p className="text-[#555] text-lg">Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
              </div>
            </div>
            <div className="card bg-white py-5 sm:py-2.5 px-7.5 rounded-sm shadow-md">
              <div className="flex border-b border-[#ecf0f3] py-3.75 space-x-2.5">
                <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/feedback/student/01.jpg" alt="" />
                <div>
                  <h4 className="text-lg font-semibold">Oliver Beddows</h4>
                  <p className="text-lg text-[#555]">UX designer</p>
                </div>
              </div>
              <div className="pt-5 pb-2.5">
                <p className="text-[#555] text-lg">Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Feedback