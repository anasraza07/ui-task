import Container from "./Container"

const About = () => {
  return (
    <div className='bg-white'>
      <Container>
        <div className="flex items-end gap-4">
          <div className="w-1/2">
            <img src="/images/about/01.png" alt="about" className="w-full" />
          </div>
          <div className="content w-1/2 py-28 pr-3">
            <div className="header-content mb-12">
              <span className="sub-heading text-[#F16126] letter-spacing-[1px] uppercase font-medium tracking-[0.3em] text-lg block">About Our Edukon</span>
              <h2 className="text-[40px] leading-12 font-bold my-4">Good Qualification Services And Better Skills</h2>
              <p className="text-[#555] text-lg">Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
            </div>
            <ul className="services space-y-4.5 max-w-md">
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/01.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl font-medium">Skilled Instructors
                  </h3>
                  <p className="text-lg text-[#555] leading-6">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/02.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl font-medium">Skilled Instructors
                  </h3>
                  <p className="text-lg text-[#555] leading-6">Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <img src="/images/about/icon/03.jpg" alt="" className="w-17.5 h-17.5" />
                <div className="service-content space-y-1.5">
                  <h3 className="text-xl font-medium">Skilled Instructors
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