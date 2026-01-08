import Container from "./common/Container"
import SectionTitle from "./common/SectionTitle"
import Subtitle from "./common/Subtitle"

const About = () => {
  return (
    <div className='bg-white'>
      <Container>
        <div className="flex flex-col-reverse xl:flex-row items-center lg:items-start xl:items-end gap-4">
          <div className="xl:w-1/2">
            <img src="/images/about/01.png" alt="about" className="w-full" />
          </div>
          <div className="content xl:w-1/2 py-17.5 lg:py-28 pr-3">
            <div className="header-content mb-7.5">
              <Subtitle text="About Our Edukon" className="text-left" />
              <SectionTitle text="Good Qualification Services And Better Skills" className="text-left" />
              <p className="text-[#555] text-lg">Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
            </div>
            <ul className="services space-y-4.5 max-w-md lg:max-w-full xl:max-w-md">
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/01.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl text-[#101115] font-semibold">Skilled Instructors
                  </h3>
                  <p className="text-lg text-[#555] leading-6">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/02.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl text-[#101115] font-semibold">Skilled Instructors
                  </h3>
                  <p className="text-lg text-[#555] leading-6">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/03.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl text-[#101115] font-semibold">Skilled Instructors
                  </h3>
                  <p className="text-lg text-[#555] leading-6">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About